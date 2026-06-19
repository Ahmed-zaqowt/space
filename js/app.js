const TZ = "Asia/Damascus";
console.log("APP STARTED");

const memories = [
  {
    id: 1,
    kind: "star",
    type: "text",
    title: "ليلة أول رسالة",
    date: "2026-05-21",
    message: "كنتِ أول من جعل للسماء معنى مختلفًا.",
  },
  {
    id: 2,
    kind: "star",
    type: "text",
    title: "اشتقت لك",
    date: "2026-05-25",
    message: "كل مساء، أترك نجمة صغيرة لتعودي إليها.",
  },
  {
    id: 3,
    kind: "planet",
    type: "audio",
    title: "صوتك وقت المطر",
    date: "2026-05-11",
    message: "تسجيل صوتي قصير يهدّئ قلبي كلما اشتقت.",
  },
  {
    id: 4,
    kind: "star",
    type: "text",
    title: "وعد صغير",
    date: "2026-06-08",
    message: "كل ليلة، هناك نجمة أعرف أنها لك.",
  },
  {
    id: 5,
    kind: "shooting",
    type: "video",
    title: "ذكرى الشهادة",
    date: "2026-04-03",
    message: "لحظة فخر لا تُنسى، كأنها شهاب مرّ في حياتنا.",
  },
  {
    id: 6,
    kind: "planet",
    type: "image",
    title: "صورة الغروب",
    date: "2026-06-02",
    message: "صورة التقطت عند الغروب حين قلتِ: كل شيء صار أهدأ.",
  },
];

const discovered = JSON.parse(localStorage.getItem("discoveredMemories") || "{}");

const state = {
  phase: "night",
  selectedMemory: null,
  meditation: false,
  ambient: false,
  meditationSeconds: Number(localStorage.getItem("ourSkyMeditationSeconds") || 0),
};

const appEl = document.getElementById("app");
const el = {
  sky: document.getElementById("sky"),
  stardustLayer: document.getElementById("stardustLayer"),
  starsBack: document.getElementById("starsBack"),
  starsMid: document.getElementById("starsMid"),
  starsFront: document.getElementById("starsFront"),
  quoteText: document.getElementById("quoteText"),
  sunOrMoon: document.getElementById("sunOrMoon"),
  moonPhaseLabel: document.getElementById("moonPhaseLabel"),
  milkyWay: document.getElementById("milkyWay"),

  memoryModal: document.getElementById("memoryModal"),
  closeModal: document.getElementById("closeModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  closeModalBtn2: document.getElementById("closeModalBtn2"),
  memoryIcon: document.getElementById("memoryIcon"),
  memoryKind: document.getElementById("memoryKind"),
  memoryTitle: document.getElementById("memoryTitle"),
  memoryDate: document.getElementById("memoryDate"),
  memoryText: document.getElementById("memoryText"),
  memoryMedia: document.getElementById("memoryMedia"),
  favoriteBtn: document.getElementById("favoriteBtn"),
  meditationBtn: document.getElementById("meditationBtn"),
  ambientBtn: document.getElementById("ambientBtn"),
};

let pointerXTarget = 0;
let pointerYTarget = 0;
let pointerX = 0;
let pointerY = 0;
let cameraReady = false;
let shootingLoopTimer = null;
let lastDustTime = 0;
let lastPulse = 0;

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function getDamascusParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    hour: Number(map.hour),
    minute: Number(map.minute),
    second: Number(map.second),
  };
}

function skyPhase(hour, minute) {
  const t = hour + minute / 60;
  if (t >= 6.25 && t < 17.5) return "day";
  if (t >= 17.5 && t < 19.75) return "sunset";
  return "night";
}

function phaseQuote(phase) {
  if (phase === "day") return "Every sky becomes more beautiful when I imagine you beneath it.";
  if (phase === "sunset") return "حين يهدأ الغروب، أسمع قلب المسافة وهو يقترب.";
  return "كل نجمة هنا تحفظ شيئًا لم نقله بعد.";
}

function moonPhase(date = new Date()) {
  const lp = 2551443;
  const newMoon = new Date(Date.UTC(2000, 0, 6, 18, 14, 0));
  const phase = ((date.getTime() / 1000 - newMoon.getTime() / 1000) % lp) / lp;
  const n = (phase + 1) % 1;

  if (n < 0.03) return "New Moon";
  if (n < 0.22) return "";
  if (n < 0.28) return "First Quarter";
  if (n < 0.47) return "Gibbous";
  if (n < 0.53) return "Full Moon";
  if (n < 0.72) return "Gibbous";
  if (n < 0.78) return "Last Quarter";
  return "";
}

function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function setPhase(phase) {
  appEl.classList.toggle("is-day", phase === "day");
  appEl.classList.toggle("is-sunset", phase === "sunset");
  appEl.classList.toggle("is-night", phase === "night");
}

function setSkyBackground(phase) {
  if (phase === "day") {
    el.sky.style.background =
      "radial-gradient(circle at 50% 16%, rgba(255,255,255,0.95) 0%, rgba(255,244,205,0.56) 10%, rgba(102,191,255,0.13) 28%, rgba(10,35,84,0) 68%), linear-gradient(to bottom, #7ccfff 0%, #98d9ff 24%, #cbefff 56%, #eaf8ff 100%)";
  } else if (phase === "sunset") {
    el.sky.style.background =
      "radial-gradient(circle at 50% 20%, rgba(255,214,146,0.9) 0%, rgba(255,170,100,0.42) 12%, rgba(131,83,164,0.2) 40%, rgba(9,14,34,0) 72%), linear-gradient(to bottom, #f7b26b 0%, #ff9160 22%, #8b5aa8 58%, #171d42 100%)";
  } else {
    el.sky.style.background =
      "radial-gradient(circle at 50% 18%, rgba(225,232,255,0.16) 0%, rgba(225,232,255,0.04) 9%, rgba(4,8,24,0) 32%), linear-gradient(to bottom, #090d1f 0%, #0b102b 38%, #050814 100%)";
  }
}

function renderSunOrMoon(phase) {
  const moonName = moonPhase();
  el.sunOrMoon.dataset.phase = phase;
  el.moonPhaseLabel.textContent = phase === "night" ? moonName : "";

  if (phase === "day") {
    el.sunOrMoon.title = "Sun";
  } else if (phase === "sunset") {
    el.sunOrMoon.title = "Sunset Sun";
  } else {
    el.sunOrMoon.title = "Moon";
  }
}

function generateStars(count, seed, phase) {
  const rnd = seededRandom(seed);
  const result = [];

  for (let i = 0; i < count; i++) {
    const x = rnd() * 100;
    const y = rnd() * (phase === "night" ? 64 : 52);
    const size =
      phase === "night"
        ? Math.pow(rnd(), 2) * 1.8 + 0.25
        : Math.pow(rnd(), 2) * 1.0 + 0.18;
    const opacity =
      phase === "night"
    ? 0.6 + rnd() * 0.4   // بدل 0.16 - 0.82 (بعضها ضعيف جدًا)
    : 0.3 + rnd() * 0.4;
    const delay = rnd() * 6;
    const twinkle = 2.8 + rnd() * 8.2;
    const roll = rnd();
    const memory = memories[i % memories.length];
    const isMemory = phase !== "day" && (i % 13 === 0 || i % 19 === 0 || i % 27 === 0);

    let kind = "star";
    if (phase === "night" && roll > 0.945) kind = "planet";
    if (phase === "night" && roll > 0.985) kind = "shooting";

    result.push({
      id: i,
      x,
      y,
      size,
      opacity,
      delay,
      twinkle,
      kind,
      memory,
      isMemory,
      layer: roll < 0.35 ? "back" : roll < 0.73 ? "mid" : "front",
    });
  }

  return result;
}

function clearLayers() {
  el.starsBack.innerHTML = "";
  el.starsMid.innerHTML = "";
  el.starsFront.innerHTML = "";
}

function appendToLayer(layerName, node) {
  if (layerName === "back") el.starsBack.appendChild(node);
  else if (layerName === "front") el.starsFront.appendChild(node);
  else el.starsMid.appendChild(node);
}

function renderStars(phase, seed) {
  const count = phase === "night" ? 200 : phase === "sunset" ? 110 : 55;
  const stars = generateStars(count, seed, phase);
  clearLayers();

  stars.forEach((s) => {
    const wrap = document.createElement("div");
    wrap.className = "star-wrap";
    wrap.style.left = `${s.x}%`;
    wrap.style.top = `${s.y}%`;

    if (s.kind === "shooting") {
      const streak = document.createElement("div");
      streak.className = "memory-star shooting";
      streak.style.setProperty("--duration", `${1.2 + Math.random() * 1.3}s`);
      streak.style.setProperty("--dx", `${220 + Math.random() * 220}px`);
      streak.style.setProperty("--dy", `${80 + Math.random() * 140}px`);
      wrap.appendChild(streak);
      appendToLayer(s.layer, wrap);
      return;
    }

    if (s.kind === "planet") {
      const planet = document.createElement("button");
      planet.className = "memory-star planet";
      planet.style.width = `${10 + s.size * 2}px`;
      planet.style.height = `${10 + s.size * 2}px`;
      planet.style.opacity = s.opacity;
      planet.style.animationDelay = `${s.delay}s`;
      planet.addEventListener("click", () => openMemory(s.memory, planet));
      wrap.appendChild(planet);
      appendToLayer(s.layer, wrap);
      return;
    }

    if (s.isMemory) {
      const star = document.createElement("button");
      star.className = "memory-star memory";
      star.style.width = "7px";
      star.style.height = "7px";
      star.style.opacity = s.opacity;
      star.style.animationDelay = `${s.delay}s`;
      star.addEventListener("click", () => openMemory(s.memory, star));
      wrap.appendChild(star);
      appendToLayer(s.layer, wrap);
      return;
    }

    const dot = document.createElement("div");
    dot.className = "memory-star normal";
    dot.style.width = `${s.size}px`;
    dot.style.height = `${s.size}px`;
    dot.style.opacity = s.opacity;
    dot.style.animationDelay = `${s.delay}s`;
    wrap.appendChild(dot);
    appendToLayer(s.layer, wrap);
  });
}

function updateQuote(phase) {
  el.quoteText.textContent = phaseQuote(phase);
  el.quoteText.style.animation = "none";
  void el.quoteText.offsetHeight;
  el.quoteText.style.animation = "";
}

function openMemory(memory, starEl = null) {
  const isFirstTime = !discovered[memory.id];

  if (isFirstTime) {
    discovered[memory.id] = true;
    localStorage.setItem("discoveredMemories", JSON.stringify(discovered));
    showDiscoveryToast("✨ تم اكتشاف ذكرى جديدة");
  }

  if (starEl) {
    appEl.classList.add("zoom-in");
    starEl.classList.add("is-focus");
  }

  setTimeout(() => {
    state.selectedMemory = memory;

    el.memoryKind.textContent =
      memory.kind === "star" ? "نجمة" :
      memory.kind === "planet" ? "كوكب" : "شهاب";

    el.memoryTitle.textContent = memory.title;
    el.memoryDate.textContent = memory.date;
    el.memoryText.textContent = memory.message;

    el.memoryIcon.textContent =
      memory.type === "audio" ? "♫" :
      memory.type === "video" ? "▶" :
      memory.type === "image" ? "▣" : "✦";

    if (memory.type === "audio") {
      el.memoryMedia.innerHTML = `
        <div style="text-align:center;">
          <div style="font-size:18px;margin-bottom:14px;">تسجيل صوتي</div>
          <div style="display:flex;align-items:end;justify-content:center;gap:4px;height:52px;">
            ${Array.from({ length: 24 }).map((_, i) => `<span style="width:4px;height:${10 + (i % 6) * 6}px;border-radius:999px;background:rgba(255,255,255,.72);opacity:${0.25 + (i % 8) * 0.07}"></span>`).join("")}
          </div>
        </div>
      `;
    } else if (memory.type === "video") {
      el.memoryMedia.innerHTML = `
        <div style="width:82px;height:82px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.12);">
          <span style="font-size:26px;">▶</span>
        </div>
      `;
    } else if (memory.type === "image") {
      el.memoryMedia.innerHTML = `
        <div style="font-size:18px;">صورة محفوظة هنا</div>
      `;
    } else {
      el.memoryMedia.innerHTML = `
        <div style="font-size:18px;">رسالة نصية</div>
      `;
    }

    el.memoryModal.classList.add("show");
    el.memoryModal.setAttribute("aria-hidden", "false");

    setTimeout(() => {
      appEl.classList.remove("zoom-in");
      if (starEl) starEl.classList.remove("is-focus");
    }, 260);
  }, 180);
}

function closeMemory() {
  el.memoryModal.classList.remove("show");
  el.memoryModal.setAttribute("aria-hidden", "true");
  state.selectedMemory = null;
}

function showDiscoveryToast(text) {
  const t = document.createElement("div");
  t.textContent = text;

  t.style.position = "fixed";
  t.style.top = "20px";
  t.style.left = "50%";
  t.style.transform = "translateX(-50%)";
  t.style.padding = "12px 18px";
  t.style.borderRadius = "999px";
  t.style.background = "rgba(0,0,0,.5)";
  t.style.border = "1px solid rgba(255,255,255,.15)";
  t.style.backdropFilter = "blur(12px)";
  t.style.color = "white";
  t.style.zIndex = "9999";
  t.style.fontSize = "13px";
  t.style.boxShadow = "0 20px 60px rgba(0,0,0,.4)";

  document.body.appendChild(t);

  setTimeout(() => {
    t.style.opacity = "0";
    t.style.transition = "opacity .6s ease";
  }, 1200);

  setTimeout(() => t.remove(), 2000);
}

function updateCameraFromPointer(clientX, clientY) {
  const nx = (clientX / window.innerWidth - 0.5) * 2;
  const ny = (clientY / window.innerHeight - 0.5) * 2;

  pointerXTarget = clamp(nx * 16, -16, 16);
  pointerYTarget = clamp(ny * 11, -11, 11);
  cameraReady = true;
}

function startCameraLoop() {
  const tickCamera = () => {
    if (!cameraReady) {
      const t = Date.now() / 9000;
      pointerXTarget = Math.sin(t) * 2.5;
      pointerYTarget = Math.cos(t * 0.9) * 1.8;
    }

    pointerX += (pointerXTarget - pointerX) * 0.05;
    pointerY += (pointerYTarget - pointerY) * 0.05;

    appEl.style.setProperty("--px", pointerX.toFixed(2));
    appEl.style.setProperty("--py", pointerY.toFixed(2));
    appEl.style.setProperty("--tilt-x", `${(-pointerY * 0.05).toFixed(2)}deg`);
    appEl.style.setProperty("--tilt-y", `${(pointerX * 0.04).toFixed(2)}deg`);

    requestAnimationFrame(tickCamera);
  };

  requestAnimationFrame(tickCamera);
}

function spawnShootingStar() {
  if (state.phase !== "night") return;

  const layer = el.starsFront;
  const node = document.createElement("div");
  node.className = "star-wrap";
  node.style.left = `${8 + Math.random() * 70}%`;
  node.style.top = `${8 + Math.random() * 34}%`;

  const streak = document.createElement("div");
  streak.className = "memory-star shooting";
  streak.style.setProperty("--duration", `${1.2 + Math.random() * 1.1}s`);
  streak.style.setProperty("--dx", `${220 + Math.random() * 220}px`);
  streak.style.setProperty("--dy", `${80 + Math.random() * 140}px`);

  node.appendChild(streak);
  layer.appendChild(node);

  streak.addEventListener("animationend", () => node.remove(), { once: true });
}

function scheduleShootingStar() {
  clearTimeout(shootingLoopTimer);
  if (state.phase !== "night") return;

  const delay = 3500 + Math.random() * 9000;
  shootingLoopTimer = setTimeout(() => {
    spawnShootingStar();
    scheduleShootingStar();
  }, delay);
}

function spawnStardust(clientX, clientY) {
  const now = performance.now();
  if (now - lastDustTime < 90) return;
  lastDustTime = now;

  const x = `${(clientX / window.innerWidth) * 100}%`;
  const y = `${(clientY / window.innerHeight) * 100}%`;
  const count = 1 + Math.floor(Math.random() * 2);

  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "dust-particle";

    const size = 1 + Math.random() * 1.8;
    const dx = `${(Math.random() - 0.5) * 60}px`;
    const dy = `${(Math.random() - 0.5) * 45}px`;
    const dur = `${700 + Math.random() * 700}ms`;

    p.style.setProperty("--x", x);
    p.style.setProperty("--y", y);
    p.style.setProperty("--s", `${size}px`);
    p.style.setProperty("--dx", dx);
    p.style.setProperty("--dy", dy);
    p.style.setProperty("--d", dur);

    el.stardustLayer.appendChild(p);
    p.addEventListener("animationend", () => p.remove(), { once: true });
  }
}

function pulseNearbyStars(clientX, clientY) {
  const now = performance.now();
  if (now - lastPulse < 100) return;
  lastPulse = now;

  const px = clientX / window.innerWidth;
  const py = clientY / window.innerHeight;

  document.querySelectorAll(".memory-star.memory, .memory-star.planet").forEach((star) => {
    const wrap = star.parentElement;
    if (!wrap) return;

    const x = parseFloat(wrap.style.left) / 100;
    const y = parseFloat(wrap.style.top) / 100;

    const dist = Math.hypot(x - px, y - py);
    star.classList.toggle("is-touched", dist < 0.12);
  });
}

function tick() {
  const parts = getDamascusParts(new Date());
  const phase =  'night' ; //skyPhase(parts.hour, parts.minute);
  const seed = parts.day + parts.month * 31 + parts.year;

  if (phase !== state.phase) {
    state.phase = phase;
    setPhase(phase);
    setSkyBackground(phase);
    updateQuote(phase);
    renderSunOrMoon(phase);
    renderStars(phase, seed);

    if (phase === "night") {
      scheduleShootingStar();
    } else {
      clearTimeout(shootingLoopTimer);
      shootingLoopTimer = null;
    }
  }
}

function toggleMeditation() {
  state.meditation = !state.meditation;
  el.meditationBtn.textContent = state.meditation ? "إيقاف التأمل" : "ابدأ التأمل";
  el.meditationBtn.style.background = state.meditation ? "rgba(255,255,255,.18)" : "rgba(255,255,255,.10)";
}

function toggleAmbient() {
  state.ambient = !state.ambient;
  el.ambientBtn.textContent = `الصوت المحيط: ${state.ambient ? "تشغيل" : "إيقاف"}`;
}

function init() {
  const parts = getDamascusParts(new Date());
  const phase = 'sunset' ;//skyPhase(parts.hour, parts.minute);
  state.phase = phase;

  setPhase(phase);
  setSkyBackground(phase);
  updateQuote(phase);
  renderSunOrMoon(phase);
  renderStars(phase, parts.day + parts.month * 31 + parts.year);
  startCameraLoop();

  if (phase === "night") {
    scheduleShootingStar();
  }

  window.addEventListener("pointermove", (e) => {
    updateCameraFromPointer(e.clientX, e.clientY);
    spawnStardust(e.clientX, e.clientY);
    pulseNearbyStars(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (!e.touches || !e.touches[0]) return;
    const t = e.touches[0];
    updateCameraFromPointer(t.clientX, t.clientY);
    spawnStardust(t.clientX, t.clientY);
    pulseNearbyStars(t.clientX, t.clientY);
  }, { passive: true });

  setInterval(tick, 1000);

 // el.meditationBtn.addEventListener("click", toggleMeditation);
 // el.ambientBtn.addEventListener("click", toggleAmbient);

  el.closeModal.addEventListener("click", closeMemory);
  el.closeModalBtn.addEventListener("click", closeMemory);
  el.closeModalBtn2.addEventListener("click", closeMemory);

  el.favoriteBtn.addEventListener("click", () => {
    el.favoriteBtn.textContent = "تمت الإضافة";
    setTimeout(() => {
      el.favoriteBtn.textContent = "مفضلة";
    }, 1000);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMemory();
  });
}

init();