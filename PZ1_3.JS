let count = prompt("Введите количество повторений:");
let i = 0;

while (i < count) {
  alert("#");
  i++;
}

let number = prompt("Введите число:");
let i = number;

while (i >= 0) {
  alert(i);
  i--;
}

let num = prompt("Введите число:");
let power = prompt("Введите степень:");
let result = 1;
let i = 0;

while (i < power) {
  result *= num;
  i++;
}

alert(`Результат: ${result}`);

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
let i = 1;

while (i <= num1 && i <= num2) {
  if (num1 % i == 0 && num2 % i == 0) {
    alert(`Общий делитель: ${i}`);
  }
  i++;
}

let number = prompt("Введите число:");
let factorial = 1;
let i = 1;

while(i <= number) {
  factorial *= i;
  i++;
}

alert(`Факториал числа ${number} равен ${factorial}`);

let answer;

do {
  answer = prompt("Сколько будет 2 + 2 * 2?");
} while (answer != 6);

alert("Правильно!");

let number = 1000;
let count = 0;

do {
  number /= 2;
  count++;
} while (number > 50);

alert(`Полученное число: ${number}`);
alert(`Количество делений: ${count}`);

let number = prompt("Введите число:");

for (let i = 1; i <= 100; i++) {
  if (i % number === 0) {
    alert(i);
  }
}

let min = prompt("Введите минимальное значение диапазона:");
let max = prompt("Введите максимальное значение диапазона:");
let count = 0;

for (let i = min; i <= max; i++) {
  if (count % 4 === 0) {
    alert(i);
  }
  count++;
}

let number = prompt("Введите число:");
let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  alert("Число простое");
} else {
  alert("Число не простое");
}