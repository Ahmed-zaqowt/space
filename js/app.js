const TZ = "Asia/Damascus";
console.log("APP STARTED");

const memories = [
  {
    id: 1,
    kind: "star",
    type: "image",
    title: "أنت نكهة الحياة الجميلة",
    date: "2026-05-21",
    message:
      "كنتِ أول من جعل للحياة معنى مختلفًا، جعلتِ قلبي يزهر وينبض، وجعلتِ أيامي مليانة ورد وأمل، أنا بحبك وممنون للحظة اللي عرفتك فيها.",
    image: "images/fr.jpg",
  },

  {
    id: 2,
    kind: "star",
    type: "image",
    title: "يا عمري إنتِ",
    date: "2026-06-1",
    message:
      "يا ريتا، إنتِ مش بس حبيبتي، إنتِ الروح اللي بترتب وجعي، والفرحة اللي بترجعلي قلبي كل ما تعب.",
    image: "images/chat.jpg",
  },
  {
    id: 3,
    kind: "star",
    type: "image",
    title: "ضحكتك وطن",
    date: "2026-05-23",
    message:
      "ضحكتك يا ريتا بتطمن قلبي، وبتحسسني إن الدنيا لسه بخير، وكأنها وطن صغير بلجأله من تعب الأيام.",
    image: "images/us.png",
  },
  {
    id: 4,
    kind: "star",
    type: "image",
    title: "قلبك الحلو",
    date: "2026-05-24",
    message:
      "يا أغلى من روحي، قلبك الحلو علّمني معنى الطيبة، ومعك حسّيت إن الحب مش بس كلام، الحب فعل وحنان وسكينة.",
    image: "images/stud.jpg",
  },
  {
    id: 5,
    kind: "star",
    type: "image",
    title: "أحلى صدفة",
    date: "2026-05-25",
    message:
      "أنا كل يوم بحمد ربنا على الصدفة اللي جمعتني فيكِ، لأن وجودك بحياتي صار أجمل من كل الأحلام اللي تخيلتها.",
    image: "images/j.jpg",
  },
  {
    id: 6,
    kind: "star",
    type: "image",
    title: "نور عيوني",
    date: "2026-05-26",
    message:
      "إنتِ نور عيوني وراحة قلبي، وكل ما بتبعيتيلي كلمة بحس الدنيا كلها صارت أهدى وأحلى.",
    image: "images/ri1.jpg",
  },
  {
    id: 7,
    kind: "star",
    type: "image",
    title: "يا ملاكي",
    date: "2026-05-27",
    message:
      "يا ملاكي، وجودك بحياتي بيخليني أحس إني أغنى إنسان بالعالم، لأن عندي قلبك وحنانك ودعواتك.",
    image: "images/us2.jpg",
  },
  {
    id: 8,
    kind: "star",
    type: "text",
    title: "أغلى من الدنيا",
    date: "2026-05-28",
    message:
      "إنتِ عندي أغلى من الدنيا كلها، وأهم من كل التفاصيل، ومعك كل لحظة بتصير إلها طعم أحلى.",
  },



   {
    id: 9,
    kind: "star",
    type: "text",
    title: "سكن قلبي",
    date: "2026-05-29",
    message: "من يوم ما عرفتكِ، صار قلبي إلكِ سكن، وصرتِ إنتِ المكان الوحيد اللي بارتاح فيه بدون ما أحكي.",
    image: "images/us.png"
  },
  {
    id: 10,
    kind: "star",
    type: "text",
    title: "حبيبة الروح",
    date: "2026-05-30",
    message: "يا حبيبة الروح، أنا ما بعرف كيف أوصفك، بس بعرف إنك أجمل نعمة دخلت حياتي وما بدي أخسرها أبدًا.",
    image: "images/us.png"
  },
  {
    id: 11,
    kind: "star",
    type: "text",
    title: "إنتِ الأمان",
    date: "2026-05-31",
    message: "معك بحس بالأمان، وبحس إن الدنيا مهما كانت قاسية، في حدا قادر يهوّن عليّ التعب بابتسامة.",
    image: "images/us.png"
  },
  {
    id: 12,
    kind: "star",
    type: "text",
    title: "روحي وإنتِ",
    date: "2026-06-01",
    message: "روحي بتحبك بطريقة ما بتنحكى، حب صادق ونظيف، حب كل يوم بزيد وما بنقص.",
    image: "images/us.png"
  },
  {
    id: 13,
    kind: "star",
    type: "text",
    title: "يا وردة قلبي",
    date: "2026-06-02",
    message: "يا وردة قلبي، إنتِ أحلى من كل الورد، وألطف من كل الكلام، ووجودك بعمري هدية من السما.",
    image: "images/us.png"
  },
  {
    id: 14,
    kind: "star",
    type: "text",
    title: "كل الحكاية إنتِ",
    date: "2026-06-03",
    message: "كل الحكاية يا ريتا إنك صرتِ أجمل جزء بحياتي، وكل شيء قبلك وبعدك صار إله معنى مختلف.",
    image: "images/us.png"
  },
  {
    id: 15,
    kind: "star",
    type: "text",
    title: "حب ما إله حدود",
    date: "2026-06-04",
    message: "بحبك حب ما إله حدود، حب بيوصل لآخر نبضة بقلبي، وبيكبر كل يوم لأنك إنتِ السبب.",
    image: "images/us.png"
  },
  {
    id: 16,
    kind: "star",
    type: "text",
    title: "عينك الحلوة",
    date: "2026-06-05",
    message: "في عيونك الحلوة بلاقيني، وبنظرتك بعيش أحلى لحظات عمري، كأن الدنيا كلها بتبتسم إلي.",
    image: "images/us.png"
  },
  {
    id: 17,
    kind: "star",
    type: "text",
    title: "مشتاقلك",
    date: "2026-06-06",
    message: "مشتاقلك بطريقة بتتعب قلبي، وبحس إن غيابك حتى لو كان بسيط، بخليني أفتقد كل شي حلو.",
    image: "images/us.png"
  },
  {
    id: 18,
    kind: "star",
    type: "text",
    title: "انتِ الحنية",
    date: "2026-06-07",
    message: "إنتِ الحنية اللي ما كنت أعرف إنها ممكن تكون بهالشكل، والدفا اللي بدّي يضل معي طول العمر.",
    image: "images/us.png"
  },
  {
    id: 19,
    kind: "star",
    type: "text",
    title: "حلوة الأيام",
    date: "2026-06-08",
    message: "معك صارت الأيام أحلى، وصار الصبح أهون، وصار الليل أهدى، لأنك موجودة بقلبي بكل وقت.",
    image: "images/us.png"
  },
  {
    id: 20,
    kind: "star",
    type: "text",
    title: "أنتِ الحلم",
    date: "2026-06-09",
    message: "يا ريتا، أحيانًا بحس إنك حلم لطيف ربنا بعثه إلي، وبخاف أصحى من جمالك.",
    image: "images/us.png"
  },
  {
    id: 21,
    kind: "star",
    type: "text",
    title: "يا سبب ابتسامتي",
    date: "2026-06-10",
    message: "إنتِ سبب ابتسامتي، وحتى لما أكون مضايق، بترجعيلي روحي بكلمتين حلوين منك.",
    image: "images/us.png"
  },
  {
    id: 22,
    kind: "star",
    type: "text",
    title: "قلبي إلك",
    date: "2026-06-11",
    message: "قلبي من أول ما عرفك اختارك، ومن وقتها صار ما بده غيرك، ولا بيسمع غير صوتك.",
    image: "images/us.png"
  },
  {
    id: 23,
    kind: "star",
    type: "text",
    title: "أحلى من الخيال",
    date: "2026-06-12",
    message: "إنتِ أحلى من الخيال، وأجمل من أي وصف، وكل مرة بشوفك بحس إني أول مرة بعشق.",
    image: "images/us.png"
  },
  {
    id: 24,
    kind: "star",
    type: "text",
    title: "نبضي فيك",
    date: "2026-06-13",
    message: "نبضي فيكِ، وراحتي في صوتكِ، وعمري بوجودك، وإنتِ كل شي حلو بلّش فيني من يوم عرفتك.",
    image: "images/us.png"
  },
  {
    id: 25,
    kind: "star",
    type: "text",
    title: "يا ست البنات",
    date: "2026-06-14",
    message: "يا ست البنات، إنتِ مميزة بكل تفصيلة، وبكفّي إنك إنتِ حتى يصير اليوم أجمل.",
    image: "images/us.png"
  },
  {
    id: 26,
    kind: "star",
    type: "text",
    title: "قربك حياة",
    date: "2026-06-15",
    message: "قربك حياة، وبعدك وجع بسيط، ومعك الدنيا بتصير أهون من أي وقت مضى.",
    image: "images/us.png"
  },
  {
    id: 27,
    kind: "star",
    type: "text",
    title: "ريحة القلب",
    date: "2026-06-16",
    message: "إنتِ متل ريحة القلب، شي ما بينوصف بس بينحس، وكل ما قربتي مني حسّيت بالطمأنينة.",
    image: "images/us.png"
  },
  {
    id: 28,
    kind: "star",
    type: "text",
    title: "غلا ما بينوصف",
    date: "2026-06-17",
    message: "غلاك يا ريتا ما بينوصف، لأنك سكنتِ جوّا قلبي بطريقة ما بدي إلها نهاية أبدًا.",
    image: "images/us.png"
  },
  {
    id: 29,
    kind: "star",
    type: "text",
    title: "ضحكتك بتكفيني",
    date: "2026-06-18",
    message: "بتكفيني ضحكتك عن ألف كلام، وبتكفيني نظرة منك حتى أنسى كل التعب اللي بمر فيه.",
    image: "images/us.png"
  },
  {
    id: 30,
    kind: "star",
    type: "text",
    title: "أنتِ أغلى تفاصيل",
    date: "2026-06-19",
    message: "إنتِ من أغلى تفاصيل حياتي، ومن أحلى الأشياء اللي صارت معي، ومن النعم اللي ما بوقف أشكر ربنا عليها.",
    image: "images/us.png"
  },
  {
    id: 31,
    kind: "star",
    type: "text",
    title: "يا حبيبتي",
    date: "2026-06-20",
    message: "يا حبيبتي، أنا أحمد وبحكيها من قلبي: بحبك أكثر مما بتتخيل، وأتمنى تظلي أحلى قصة بعمري.",
    image: "images/us.png"
  },
  {
    id: 32,
    kind: "star",
    type: "text",
    title: "سحر لطيف",
    date: "2026-06-21",
    message: "فيكي سحر لطيف، سحر بيخلي الروح تتعلق، والقلب يهدى، والعين ما تشبع من جمالك.",
    image: "images/us.png"
  },
  {
    id: 33,
    kind: "star",
    type: "text",
    title: "كل يوم بحبك أكتر",
    date: "2026-06-22",
    message: "كل يوم بمر عليّ، بحبك فيه أكتر من اليوم اللي قبله، وكأن قلبي ما بيعرف غير الزيادة في حبك.",
    image: "images/us.png"
  },
  {
    id: 34,
    kind: "star",
    type: "text",
    title: "إنتِ حكايتي",
    date: "2026-06-23",
    message: "إنتِ حكايتي اللي بفتخر فيها، والاسم اللي بمررّره بقلبي بحنية وفخر وحب كبير.",
    image: "images/us.png"
  },
  {
    id: 35,
    kind: "star",
    type: "text",
    title: "دنياي إنتِ",
    date: "2026-06-24",
    message: "دنياي بتصير أحلى لما تكوني فيها، وبصير لكل شيء معنى لأنه إنتِ ضمن التفاصيل.",
    image: "images/us.png"
  },
  {
    id: 36,
    kind: "star",
    type: "text",
    title: "حضورك غلا",
    date: "2026-06-25",
    message: "حضورك غلا، وكلامك راحة، وقلبك وطن، وأنا كل مرة بقرب منك بحمد ربنا على هالنعمة.",
    image: "images/us.png"
  },
  {
    id: 37,
    kind: "star",
    type: "text",
    title: "أحن قلب",
    date: "2026-06-26",
    message: "إنتِ أحن قلب عرفته، وأطيب روح سكنت بحياتي، ومعك صار الحب ألطف وأصدق.",
    image: "images/us.png"
  },
  {
    id: 38,
    kind: "star",
    type: "text",
    title: "يا نجمة عمري",
    date: "2026-06-27",
    message: "يا نجمة عمري، إنتِ اللي بتنوري ليل أيامي، وبتخلي قلبي يمشي وهو مطمّن ومبسوط.",
    image: "images/us.png"
  },
  {
    id: 39,
    kind: "star",
    type: "text",
    title: "ما بنسى صوتك",
    date: "2026-06-28",
    message: "صوتك يا ريتا من الأشياء اللي ما بنساها، لأنه بيفرق فيني كتير وبيخلي روحي مرتاحة.",
    image: "images/us.png"
  },
  {
    id: 40,
    kind: "star",
    type: "text",
    title: "أنتِ الغلا كله",
    date: "2026-06-29",
    message: "إنتِ الغلا كله، وإنتِ الأنس كله، وإنتِ السبب اللي بخلي قلبي يفضل حي ومليان حب.",
    image: "images/us.png"
  },
  {
    id: 41,
    kind: "star",
    type: "text",
    title: "بدي إياكِ معي",
    date: "2026-06-30",
    message: "بدي إياكِ معي بكل تفاصيل الحياة، في الفرح والتعب، بالصمت والكلام، لأن وجودك هو الأجمل.",
    image: "images/us.png"
  },
  {
    id: 42,
    kind: "star",
    type: "text",
    title: "آخر الكلام حب",
    date: "2026-07-01",
    message: "وآخر الكلام يا ريتا، إني بحبك بطريقة صافية وصادقة، وبدي تظلي أجمل شي صار بحياتي.",
    image: "images/us.png"
  }
];
const discovered = JSON.parse(
  localStorage.getItem("discoveredMemories") || "{}",
);

const state = {
  phase: "night",
  selectedMemory: null,
  meditation: false,
  ambient: false,
  meditationSeconds: Number(
    localStorage.getItem("ourSkyMeditationSeconds") || 0,
  ),
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
  if (phase === "day") return "لم يحن الوقت بعد للتأمل ";
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

function shuffleWithSeed(array, seed) {
  const rnd = seededRandom(seed);
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
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
        ? 0.6 + rnd() * 0.4
        : 0.3 + rnd() * 0.4;
    const delay = rnd() * 6;
    const twinkle = 2.8 + rnd() * 8.2;
    const roll = rnd();

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

function buildMemoryAssignments(stars, seed) {
  const shuffledMemories = shuffleWithSeed(memories, seed);
  const assignments = new Map();

  const planets = stars.filter((s) => s.kind === "planet");
  const normalStars = stars.filter((s) => s.kind === "star");
  const candidates = [...planets, ...normalStars];

  const limit = Math.min(shuffledMemories.length, candidates.length);
  for (let i = 0; i < limit; i++) {
    assignments.set(candidates[i].id, shuffledMemories[i]);
  }

  return assignments;
}

function renderStars(phase, seed) {
  const count = phase === "night" ? 200 : phase === "sunset" ? 110 : 55;
  const stars = generateStars(count, seed, phase);
  const memoryAssignments = buildMemoryAssignments(stars, seed);

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

    const memory = memoryAssignments.get(s.id) || null;

    if (s.kind === "planet") {
      const planet = document.createElement("button");
      planet.type = "button";
      planet.className = "memory-star planet";
      planet.style.width = `${10 + s.size * 2}px`;
      planet.style.height = `${10 + s.size * 2}px`;
      planet.style.opacity = s.opacity;
      planet.style.animationDelay = `${s.delay}s`;

      if (memory) {
        planet.dataset.memoryId = String(memory.id);
        planet.addEventListener("click", () => openMemory(memory, planet));
      }

      wrap.appendChild(planet);
      appendToLayer(s.layer, wrap);
      return;
    }

    if (memory) {
      const star = document.createElement("button");
      star.type = "button";
      star.className = "memory-star memory";
      star.style.width = "7px";
      star.style.height = "7px";
      star.style.opacity = s.opacity;
      star.style.animationDelay = `${s.delay}s`;
      star.dataset.memoryId = String(memory.id);
      star.addEventListener("click", () => openMemory(memory, star));

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
      memory.kind === "star"
        ? "نجمة"
        : memory.kind === "planet"
          ? "كوكب"
          : "شهاب";

    el.memoryTitle.textContent = memory.title;
    el.memoryDate.textContent = memory.date;
    el.memoryText.textContent = memory.message;

    el.memoryIcon.textContent =
      memory.type === "audio"
        ? "♫"
        : memory.type === "video"
          ? "▶"
          : memory.type === "image"
            ? "▣"
            : "✦";

    if (memory.type === "audio") {
      el.memoryMedia.innerHTML = `
        <div style="text-align:center;">
          <div style="font-size:18px;margin-bottom:14px;">تسجيل صوتي</div>
          <div style="display:flex;align-items:end;justify-content:center;gap:4px;height:52px;">
            ${Array.from({ length: 24 })
              .map(
                (_, i) =>
                  `<span style="width:4px;height:${10 + (i % 6) * 6}px;border-radius:999px;background:rgba(255,255,255,.72);opacity:${0.25 + (i % 8) * 0.07}"></span>`,
              )
              .join("")}
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
        <img
          src="${memory.image}"
          alt="${memory.title}"
          style="
            max-width:100%;
            max-height:70vh;
            width:auto;
            height:auto;
            display:block;
            margin:auto;
            border-radius:18px;
          "
        >
      `;
    } else {
      el.memoryMedia.innerHTML = ``;
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

  document
    .querySelectorAll(".memory-star.memory, .memory-star.planet")
    .forEach((star) => {
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
  const phase = "night"; // skyPhase(parts.hour, parts.minute)
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

function init() {
  const parts = getDamascusParts(new Date());
  const phase = "night"; // skyPhase(parts.hour, parts.minute)
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

  window.addEventListener(
    "pointermove",
    (e) => {
      updateCameraFromPointer(e.clientX, e.clientY);
      spawnStardust(e.clientX, e.clientY);
      pulseNearbyStars(e.clientX, e.clientY);
    },
    { passive: true },
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (!e.touches || !e.touches[0]) return;
      const t = e.touches[0];
      updateCameraFromPointer(t.clientX, t.clientY);
      spawnStardust(t.clientX, t.clientY);
      pulseNearbyStars(t.clientX, t.clientY);
    },
    { passive: true },
  );

  setInterval(tick, 1000);

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