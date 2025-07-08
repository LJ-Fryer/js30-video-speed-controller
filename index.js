const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar"); // 0.5 to 4x speed
const video = document.querySelector(".flex");

function handleRate(e) {
  const y = e.pageY - this.offsetTop;

  const percent = y / this.offsetHeight;
  const min = 0.5;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  bar.style.height = height;

  const playbackRate = (max - min) * percent + min;
  bar.textContent = playbackRate.toFixed(1) + "x";
  video.playbackRate = playbackRate;
  console.log(this.offsetHeight);
}
speed.addEventListener("mousemove", handleRate);
