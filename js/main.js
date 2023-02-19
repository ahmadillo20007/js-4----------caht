let num1 = parseInt(prompt("1-sonni kiriting: "));
let num2 = parseInt(prompt("2-sonni kiriting: "));
let num3 = parseInt(prompt("3-sonni kiriting: "));
let elText = document.querySelector('.text')

function min(a, b, c) {
  return Math.min(a, Math.min(b, c));
}

let minNum = min(num1, num2, num3);

elText.innerHTML = "Eng kichik son: " + minNum;

// qwertyuiopasdfghjk


let counter = 0;
const counterElement = document.querySelector('.counter');

function increaseCounter() {
  counter++;
  counterElement.innerHTML = counter;
}

function resetCounter() {
  counter = 0;
  counterElement.innerHTML = counter;
}


