const sideInput = document.querySelectorAll(".side-input");

const calculateBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

calculateBtn.addEventListener("click", calculateHypotenuse);

// logic

function calculateSumSquare(a, b) {
  const sumOfSquare = a * a + b * b;
  return sumOfSquare;
}

function calculateHypotenuse() {
  const sumOfSideSquare = calculateSumSquare(
    Number(sideInput[0].value),
    Number(sideInput[1].value)
  );
  const hypotenuse = Math.sqrt(sumOfSideSquare);
  outputEl.innerText = `The length of Hypotenuse is c = ${hypotenuse} `;
}
