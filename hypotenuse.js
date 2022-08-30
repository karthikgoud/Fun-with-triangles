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
  if (sideInput[0].value && sideInput[1].value) {
    if (sideInput[0].value > 0 && sideInput[1].value > 0) {
      const sumOfSideSquare = calculateSumSquare(
        Number(sideInput[0].value),
        Number(sideInput[1].value)
      );
      const hypotenuse = Math.sqrt(sumOfSideSquare);
      outputEl.innerText = `The length of Hypotenuse is c = ${hypotenuse.toFixed(
        2
      )}`;
      outputEl.style.color = "yellow";
    } else {
      outputEl.textContent = "❌ Input value should be greater than ZERO ❌";
    }
  } else {
    outputEl.textContent = "❌ Enter all input fields ❌";
  }
}
