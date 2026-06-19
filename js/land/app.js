const playBtn = document.getElementById("playBtn");
const voiceAudio = document.getElementById("voiceAudio");
const waves = document.getElementById("waves");
const duration = document.getElementById("duration");

voiceAudio.addEventListener("loadedmetadata", () => {
  const total = Math.floor(voiceAudio.duration);
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  duration.textContent = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
});

playBtn.addEventListener("click", async () => {
  if (voiceAudio.paused) {
    try {
      await voiceAudio.play();
      playBtn.textContent = "❚❚";
      waves.classList.add("animating");
    } catch (err) {
      console.log("Audio play failed:", err);
    }
  } else {
    voiceAudio.pause();
    playBtn.textContent = "▶";
    waves.classList.remove("animating");
  }
});

voiceAudio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
  waves.classList.remove("animating");
});