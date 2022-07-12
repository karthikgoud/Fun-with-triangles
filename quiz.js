const quizForm = document.querySelector(".form-quiz");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output-div");

const correctAnswer = ["90°", "right angled", "180°", "60°", "80°", "3"];

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
  output.innerText = `Your score is ${score}`;
}
