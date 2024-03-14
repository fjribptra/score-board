const p1Display = document.getElementById("p1-display");
const p2Display = document.getElementById("p2-display");

const maxScoreInput = document.getElementById("maxScore");

const p1Btn = document.getElementById("p1-btn");
const p2Btn = document.getElementById("p2-btn");

const resetBtn = document.getElementById("reset");

let maxScore;
let p1Score = 0;
let p2Score = 0;

maxScoreInput.addEventListener("change", function (e) {
  maxScore = e.target.value;
  p1Btn.removeAttribute("disabled");
  p2Btn.removeAttribute("disabled");
});

function increment(params) {
  return params++;
}

p1Btn.addEventListener("click", () => {
  if (p1Score >= maxScore || p2Score >= maxScore) return alert("limit!!!");
  p1Score++;
  p1Display.textContent = p1Score;
});

p2Btn.addEventListener("click", () => {
  if (p1Score >= maxScore || p2Score >= maxScore) return alert("limit!!!");
  p2Score++;
  p2Display.textContent = p2Score;
});

resetBtn.addEventListener("click", function (e) {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p1Score;
});
