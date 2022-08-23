// queryselectorAll gives array of elem have class name mentioned
// we can access the by indexing ex: inputs[0] gives 1st input
const inputs = document.querySelectorAll(".input-angle");

const output = document.querySelector("#output");
const checkButton = document.querySelector("#btn-check");

checkButton.addEventListener("click", isTriangles);

// click handler
function isTriangles() {
  if (inputs[0].value && inputs[1].value && inputs[2].value) {
    const sumOfAngles = calculateSumOfAngles(
      Number(inputs[0].value), //typecast string to number
      Number(inputs[1].value),
      Number(inputs[2].value)
    );

    // logic
    if (sumOfAngles === 180) {
      output.innerText = " Yay!!! 👍, angles form a triangle";
    } else {
      output.innerText = "Oh! oh!, angles don`t form a triangle";
    }
  } else {
    output.textContent = " ❌ Enter all input fields ❌";
  }
}

// function to calculate sum of angles
function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}
