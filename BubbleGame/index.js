var clutter = ``;
let num = 0;
let n = 60;
let score = 0;
var timer;

document.querySelector("#startGame").addEventListener("click", (btn) => {
  if (btn.target.textContent == "Start") {
    makeBubble();
    startTimer();
    getNewHit();
    btn.target.textContent = "Restart";
  } else {
    makeBubble();
    resetTimer();
    getNewHit();
  }
});
function incScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

// Bubble Maker
function makeBubble() {
  clutter = ``;
  for (let i = 1; i <= 234; i++) {
    num = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${num}</div>`;
  }
  let pbtm = document.querySelector("#pbtm");
  pbtm.innerHTML = clutter;
}

// Onlcik Listener
document.querySelector("#pbtm").addEventListener("click", (details) => {
  let timer = Number(document.querySelector("#timer").textContent);
  let hit = Number(document.querySelector("#hitnum").textContent);
  let click = details.target.textContent;
  if (hit == click && timer > 0) {
    incScore();
    getNewHit();
    makeBubble();
  }
});

// Timer Ticker Function
function startTimer() {
  timer = setInterval(() => {
    if (n > 0) {
      --n;
      document.querySelector("#timer").textContent = n;
    } else {
      clearInterval(timer);
      document.querySelector("#pbtm").innerHTML = `<h1>Score =  ${score}</h1>`;
    }
  }, 1000);
}

function resetTimer() {
  n = 60;
  score = 0;
  document.querySelector("#score").textContent = score;
  clearInterval(timer);
  startTimer();
}

function getNewHit() {
  document.querySelector("#hitnum").textContent = Math.floor(
    Math.random() * 10
  );
}
