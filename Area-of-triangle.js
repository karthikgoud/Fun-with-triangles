const input = document.querySelectorAll(".input");
const calculateBtn = document.querySelector("#calculate-btn");
const outputEl = document.querySelector("#output");

calculateBtn.addEventListener("click", calculateArea);

function calculateArea() {
  if (input[0].value && input[1].value) {
    if (input[0].value > 0 && input[1].value > 0) {
      const base = Number(input[0].value);
      const height = Number(input[1].value);

      console.log(base);
      console.log(height);

      const areaOfTriangle = 0.5 * base * height;

      outputEl.innerText = `Area of Triangle is: ${areaOfTriangle.toFixed(
        2
      )} (square units)`;
    } else {
      outputEl.textContent =
        "Invalid input: Inputs value should be greater than ZERO.";
    }
  } else {
    outputEl.textContent = "❌ Enter all input fields ❌";
  }
}
