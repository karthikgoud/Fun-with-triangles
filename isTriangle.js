// queryselectorAll gives array of elem have class name mentioned
// we can access the by indexing ex: inputs[0] gives 1st input
const inputs = document.querySelectorAll(".input-angle");

const outputEl = document.querySelector("#output");
const checkButton = document.querySelector("#btn-check");

checkButton.addEventListener("click", isTriangles);

// click handler
function isTriangles() {
  if (inputs[0].value && inputs[1].value && inputs[2].value) {
    if (inputs[0].value > 0 && inputs[1].value > 0 && inputs[2].value > 0) {
      const sumOfAngles = calculateSumOfAngles(
        Number(inputs[0].value), //typecast string to number
        Number(inputs[1].value),
        Number(inputs[2].value)
      );

      // logic
      if (sumOfAngles === 180) {
        showOutput();
        outputEl.innerText = " Yay!!! 👍, Angles form a triangle.";
      } else {
        showOutput();
        outputEl.innerText = "Oh! oh! 🙅‍♂️, Angles do not form a triangle.";
      }
    } else {
      showOutput();
      outputEl.textContent =
        " ❌ Input value should be greater than ZERO to form a triangle. ❌";
    }
  } else {
    showOutput();
    outputEl.textContent = " ❌ Enter all input fields. ❌";
  }
}

// function to calculate sum of angles
function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function showOutput() {
  outputEl.style.display = "block";
}
