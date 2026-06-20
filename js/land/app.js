const app = document.getElementById("app");

const detailPlanet = document.getElementById("detailPlanet");
const detailTitle = document.getElementById("detailTitle");
const detailDesc = document.getElementById("detailDesc");
const backBtn = document.getElementById("backBtn");

// 🎧 صوت الديتيل (المهم)
const detailPlayBtn = document.querySelector(".detail-playBtn");
const detailAudio = document.querySelector(".detail-audio");
const detailWaves = document.querySelector(".detail-waves");
const detailDuration = document.querySelector(".detail-duration");
const planetData = {
  القمر: {
    cls: "moon",
    title: "القمر",
    desc: "وجه ريتا الضحوك يجعل ذلك القمر في موقف صعب , يفقد القمر امام وجهها جماله , لأنها قمري",
     audio: "audio/moona.mp3",
  },
  زحل: {
    cls: "saturn",
    title: "زحل",
    desc: "ذلك الحنان الذي يغمرني منك , يلتف حولي تماما كحلقات زحل , ليرسم هذا الحنان طمأنينة لا مثيل لها ",
     audio: "audio/almosh.mp3",
  },
  ريتا: {
    cls: "rita",
    title: "ريتا",
    desc: " , بعد أن بحثت في عيونك ورأيت الكون الفسيح , وحاولت أن أجد لك كوكبا شبيها , لم أجد ... فقررت أن اصنع لك واحدا , يسمى باسمك و يتسم بوسمك . ريتا",
        audio: "audio/rit.mp3",
  },
  نبتون: {
    cls: "neptune",
    title: "نبتون",
    desc: "كونك بعيدة هذا لا يعني أنك لستي مهمة لابد أن نلتقي في يوم ما , سنلتقي يا حبيبي",
    audio: "audio/nbt.mp3",
  },
  المريخ: {
    cls: "mars",
    title: "المريخ",
    desc: "لا يوجد شيء يضاهي حمرة خدودك يا ريتا ولا حتى الكوكب الاكثر احمرارا في الكون تلك الخدود المكسوة بالخجل واللون الأحمر , تأسرني",
     audio: "audio/mre5.mp3",
  },
};


// 🌌 اختيار كوكب
function selectPlanet(name) {
  const data = planetData[name];
  if (!data) return;

  detailPlanet.className = `detail-planet ${data.cls}`;

  detailTitle.textContent = data.title;
  detailDesc.textContent = data.desc;

  app.classList.add("show-detail");

  // 🔥 تجهيز الصوت فقط (بدون تشغيل)
  detailAudio.pause();
  detailAudio.currentTime = 0;
  detailAudio.src = data.audio;
  detailAudio.load();

  detailPlayBtn.textContent = "▶";
  detailWaves.classList.remove("animating");
}

// ▶ تشغيل / إيقاف الصوت
detailPlayBtn.addEventListener("click", async () => {
  try {
    if (detailAudio.paused) {
      await detailAudio.play();
      detailPlayBtn.textContent = "❚❚";
      detailWaves.classList.add("animating");
    } else {
      detailAudio.pause();
      detailPlayBtn.textContent = "▶";
      detailWaves.classList.remove("animating");
    }
  } catch (err) {
    console.log("Audio error:", err);
  }
});

// 🔚 نهاية الصوت
detailAudio.addEventListener("ended", () => {
  detailPlayBtn.textContent = "▶";
  detailWaves.classList.remove("animating");
});

// 🔙 رجوع
backBtn.addEventListener("click", () => {
  app.classList.remove("show-detail");
});

// 🌌 اختيار الشاشة
document.querySelectorAll(".choice-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.go;

    document.getElementById("choiceScreen").classList.remove("show-choice");

    document
      .getElementById("planetScreen")
      .classList.toggle("show", target === "planetScreen");
    document
      .getElementById("detailScreen")
      .classList.toggle("show-detail", target === "detailScreen");
  });
});

const mainPlayBtn = document.getElementById("mainPlayBtn");
const mainAudio = document.getElementById("mainAudio");
const w = document.getElementById("waves");

mainPlayBtn.addEventListener("click", async () => {
  if (mainAudio.paused) {
    await mainAudio.play();
    mainPlayBtn.textContent = "❚❚";
    w.classList.add("animating");
  } else {
    mainAudio.pause();
    mainPlayBtn.textContent = "▶";
    w.classList.remove("animating");
  }
});

mainAudio.addEventListener("ended", () => {
  mainPlayBtn.textContent = "▶";
});
