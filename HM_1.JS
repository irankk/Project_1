let username = prompt("Введите ваше имя:");
alert("Привет, " + username + "!");

const currentYear = 2022; // Текущий год
let birthYear = prompt("Введите год вашего рождения:");
let age = currentYear - birthYear;
alert("Вам " + age + " лет");

let sideLength = prompt("Введите длину стороны квадрата:");
let perimeter = 4 * sideLength;
alert("Периметр квадрата равен " + perimeter);

const pi = 3.14; // Значение числа Пи
let radius = prompt("Введите радиус окружности:");
let area = pi * radius * radius;
alert("Площадь окружности равна " + area);

let distance = prompt("Введите расстояние между городами (в км):");
let time = prompt("Введите время, за которое нужно добраться (в часах):");
let speed = distance / time;
alert("Чтобы успеть вовремя, необходимо двигаться со скоростью " + speed + " км/ч");

const exchangeRate = 0.85; // Курс доллара к евро
let dollars = prompt("Введите сумму в долларах:");
let euros = dollars * exchangeRate;
alert("Сумма в евро: " + euros);

const flashDriveCapacity = 1024; // Объем флешки в Гб
const fileSize = 820; // Размер файла в Мб
let filesCount = Math.floor((flashDriveCapacity * 1024) / fileSize);
alert("На флешку помещается " + filesCount + " файлов размером в 820 Мб");

let walletAmount = prompt("Введите сумму денег в кошельке:");
let chocolatePrice = prompt("Введите цену одной шоколадки:");
let chocolateCount = Math.floor(walletAmount / chocolatePrice);
let change = walletAmount % chocolatePrice;
alert("Вы можете купить " + chocolateCount + " шоколадок, у вас останется " + change + " денег");

let number = prompt("Введите трехзначное число:");
let reverseNumber = parseInt(number.toString().split('').reverse().join(''));
alert("Число задом наперед: " + reverseNumber);

let number = prompt("Введите целое число:");
let isEven = number % 2 === 0;
alert("Число четное: " + isEven);