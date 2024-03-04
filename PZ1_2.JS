let number = prompt("Введите число:");
if (number > 0) {
    alert("Число положительное");
} else if (number < 0) {
    alert("Число отрицательное");
} else {
    alert("Число равно нулю");
}

let age = prompt("Введите ваш возраст:");
if (age >= 0 && age <= 120) {
    alert("Возраст корректен");
} else {
    alert("Введен некорректный возраст");
}

let number = prompt("Введите число:");
let absolute = Math.abs(number);
alert("Модуль числа: " + absolute);

let hours = prompt("Введите часы (от 0 до 23):");
let minutes = prompt("Введите минуты (от 0 до 59):");
let seconds = prompt("Введите секунды (от 0 до 59):");
if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59 && seconds >= 0 && seconds <= 59) {
    alert("Время корректно");
} else {
    alert("Введено некорректное время");
}

let x = prompt("Введите координату X:");
let y = prompt("Введите координату Y:");
if (x > 0 && y > 0) {
    alert("Точка находится в первой четверти");
} else if (x < 0 && y > 0) {
    alert("Точка находится во второй четверти");
} else if (x < 0 && y < 0) {
    alert("Точка находится в третьей четверти");
} else if (x > 0 && y < 0) {
    alert("Точка находится в четвертой четверти");
} else if (x == 0 && y == 0) {
    alert("Точка находится в начале координат");
} else if (x == 0) {
    alert("Точка находится на оси Y");
} else if (y == 0) {
    alert("Точка находится на оси X");
} else {
    alert("Введены некорректные координаты");
}

let monthNumber = prompt("Введите номер месяца:");
let monthName;
switch (monthNumber) {
    case '1':
        monthName = 'Январь';
        break;
    case '2':
        monthName = 'Февраль';
        break;
    case '3':
        monthName = 'Март';
        break;
    case '4':
        monthName = 'Апрель';
        break;
    case '5':
        monthName = 'Май';
        break;
    case '6':
        monthName = 'Июнь';
        break;
    case '7':
        monthName = 'Июль';
        break;
    case '8':
        monthName = 'Август';
        break;
    case '9':
        monthName = 'Сентябрь';
        break;
    case '10':
        monthName = 'Октябрь';
        break;
    case '11':
        monthName = 'Ноябрь';
        break;
    case '12':
        monthName = 'Декабрь';
        break;
    default:
        monthName = 'Некорректный номер месяца';
}
alert("Название месяца: " + monthName);

let num1 = prompt("Введите первое число:");
let operator = prompt("Введите знак операции (+, -, *, /):");
let num2 = prompt("Введите второе число:");
let result;
switch (operator) {
    case '+':
        result = Number(num1) + Number(num2);
        break;
    case '-':
        result = Number(num1) - Number(num2);
        break;
    case '*':
        result = Number(num1) * Number(num2);
        break;
    case '/':
        result = Number(num1) / Number(num2);
        break;
    default:
        result = 'Некорректный знак операции';
}
alert("Результат: " + result);

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
let max = (Number(num1) > Number(num2)) ? num1 : num2;
alert("Наибольшее число: " + max);

let number = prompt("Введите число:");
let message = (number % 5 === 0) ? "Число кратно 5" : "Число не кратно 5";
alert(message);

let planetName = prompt("Введите название планеты:");
let greeting = (planetName.toLowerCase() === "земля") ? "Привет, землянин!" : "Привет, инопланетянин!";
alert(greeting);