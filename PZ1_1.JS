let number = prompt("Введите число:");
let result = number ** 2;
alert("Результат: " + result);

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
let average = (Number(num1) + Number(num2)) / 2;
alert("Среднее арифметическое: " + average);

let sideLength = prompt("Введите длину стороны квадрата:");
let area = sideLength ** 2;
alert("Площадь квадрата: " + area);

const conversionRate = 0.621371;
let kilometers = prompt("Введите количество километров:");
let miles = kilometers * conversionRate;
alert("Мили: " + miles);

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

let sum = Number(num1) + Number(num2);
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

alert("Сумма: " + sum);
alert("Разность: " + difference);
alert("Произведение: " + product);
alert("Частное: " + quotient);

let a = prompt("Введите значение a:");
let b = prompt("Введите значение b:");

let x = -b / a;
alert("x = " + x);

const hoursPerDay = 24;
const minutesPerHour = 60;

let currentHours = prompt("Введите текущее количество часов:");
let currentMinutes = prompt("Введите текущее количество минут:");

let remainingHours = hoursPerDay - currentHours - 1;
let remainingMinutes = minutesPerHour - currentMinutes;

alert("До следующего дня осталось " + remainingHours + " часов и " + remainingMinutes + " минут.");

let number = prompt("Введите трехзначное число:");
let secondDigit = Math.floor(number / 10) % 10;
alert("Вторая цифра: " + secondDigit);

let number = prompt("Введите пятизначное число:");
let lastDigit = number % 10;
let otherDigits = Math.floor(number / 10);
let result = lastDigit * 10000 + otherDigits;
alert("Результат: " + result);

const salaryBase = 250;
const commissionRate = 0.1;

let totalSales = prompt("Введите общую сумму продаж за месяц:");
let commission = totalSales * commissionRate;
let salary = salaryBase + commission;

alert("Зарплата работника: $" + salary);