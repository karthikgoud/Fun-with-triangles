const quizForm = document.querySelector(".form-quiz");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output-div");

const correctAnswer = [
  "90°",
  "right angled",
  "180°",
  "60°",
  "80°",
  "3",
  "Pythagorus",
  "Longest side of triangle",
  "Trignometry",
  "2",
];

submitBtn.addEventListener("click", score);

function score() {
  let score = 0;
  let index = 0;

  const formResults = new FormData(quizForm);

  for (let value of formResults.values()) {
    if (value === correctAnswer[index]) {
      score += 1;
    }
    index += 1;
  }
  if (score === 10) {
    output.style.color = "lime";
    output.innerText = `Good Job !!!🎉 Your score is ${score} out of ${correctAnswer.length}`;
  } else {
    output.style.color = "yellow";
    output.innerHTML = `Your score is ${score} out of ${correctAnswer.length}. <a id="try-again" href="#top" onclick="window.location.reload()">Try again</a> `;
  }
}
