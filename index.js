let email = prompt("Enter your email for subscription and latest updates");
while (!email.includes("@gmail.com")) {
  email = prompt("Type the correct email");
}
alert("You will receive updates and offers.");

let currentAudio = null;

document.querySelectorAll("audio").forEach(audio => {
  audio.addEventListener("play", () => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = audio;
  });
});

document.querySelector(".mar.start").addEventListener("click", () => {
  if (currentAudio) currentAudio.play();
});

document.querySelector(".mar.stop").addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

document.querySelector(".mar.playnext").addEventListener("click", () => {
  const audios = document.querySelectorAll("audio");
  let nextAudio = audios[0];

  if (currentAudio) {
    const currentIndex = Array.from(audios).indexOf(currentAudio);
    nextAudio = audios[(currentIndex + 1) % audios.length];
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  nextAudio.play();
});

document.querySelector(".mar.playback").addEventListener("click", () => {
  if (currentAudio) currentAudio.currentTime = 0;
});

document.querySelector(".mar.pause").addEventListener("click", () => {
  if (currentAudio) currentAudio.pause();
});

document.querySelector("h1").style.color = "red";

const body = document.querySelector("body");
let isBlue = false;
setInterval(() => {
  body.style.background = isBlue ? "purple" : "#3498db";
  isBlue = !isBlue;
}, 1000);

document.getElementById("sign").addEventListener("click", () => {
  prompt("Enter your name");
});
