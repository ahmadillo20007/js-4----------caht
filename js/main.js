let num1 = parseInt(prompt("1-sonni kiriting: "));
let num2 = parseInt(prompt("2-sonni kiriting: "));
let num3 = parseInt(prompt("3-sonni kiriting: "));

function min(a, b, c) {
  return Math.min(a, Math.min(b, c));
}

let minNum = min(num1, num2, num3);

console.log("Eng kichik son: " + minNum);