const input = document.querySelectorAll(".input");
const calculateBtn = document.querySelector("#calculate-btn");
const outputEl = document.querySelector("#output");

calculateBtn.addEventListener("click", calculateArea);

function calculateArea() {
  const base = Number(input[0].value);
  const height = Number(input[1].value);

  console.log(base);
  console.log(height);

  const areaOfTriangle = 0.5 * base * height;

  outputEl.innerText = `Area of Triangle is ${areaOfTriangle} (square units)`;
}
