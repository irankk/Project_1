let age = parseInt(prompt("Введите ваш возраст:"));

if (age >= 0 && age <= 2) {
  console.log("Вы являетесь ребенком");
} else if (age >= 12 && age <= 18) {
  console.log("Вы являетесь подростком");
} else if (age >= 18 && age < 60) {
  console.log("Вы являетесь взрослым");
} else {
  console.log("Вы являетесь пенсионером");
}

let number = parseInt(prompt("Введите число от 0 до 9:"));

if (number === 0) {
  console.log(")");
} else if (number === 1) {
  console.log("!");
} else if (number === 2) {
  console.log("@");
} else if (number === 3) {
  console.log("#");
} else if (number === 4) {
  console.log("$");
} else if (number === 5) {
  console.log("%");
} else if (number === 6) {
  console.log("^");
} else if (number === 7) {
  console.log("&");
} else if (number === 8) {
  console.log("*");
} else if (number === 9) {
  console.log("(");
} else {
  console.log("Некорректное число");
}

let number = parseInt(prompt("Введите трехзначное число:"));

let digit1 = Math.floor(number / 100);
let digit2 = Math.floor((number % 100) / 10);
let digit3 = number % 10;

if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
  console.log("В числе есть одинаковые цифры");
} else {
  console.log("В числе нет одинаковых цифр");
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  function findGCD(a, b) {
    while (b !== 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
    }
    
    return a;
  }
  
  let number1 = parseInt(prompt("Введите первое число:"));
  let number2 = parseInt(prompt("Введите второе число:"));
  
  let gcd = findGCD(number1, number2);
  
  console.log("Наибольший общий делитель:", gcd);

  const exchangeRates = {
    USD: {
      EUR: 0.85,
      UAN: 27.65,
      AZN: 1.7
    },
    EUR: {
      USD: 1.18,
      UAN: 31.37,
      AZN: 1.95
    },
    UAN: {
      USD: 0.036,
      EUR: 0.032,
      AZN: 0.062
    },
    AZN: {
      USD: 0.59,
      EUR: 0.51,
      UAN: 16.26
    }
  };
  
  function convertCurrency(amount, fromCurrency, toCurrency) {
    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
      const rate = exchangeRates[fromCurrency][toCurrency];
      const convertedAmount = amount * rate;
      return convertedAmount;
    } else {
      return "Ошибка! Неверно указана валюта.";
    }
  }
  
  const amount = parseFloat(prompt("Введите количество USD:"));
  const currency = prompt("В какую валюту вы хотите перевести? (EUR, UAN, AZN):");
  
  const convertedAmount = convertCurrency(amount, "USD", currency);
  console.log(`Сумма в выбранной валюте: ${convertedAmount}`);

  const purchaseAmount = parseFloat(prompt("Введите сумму покупки:"));

  let discount = 0;
  if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 0.03;
  } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 0.05;
  } else if (purchaseAmount >= 500) {
    discount = 0.07;
  }
  
  const discountedAmount = purchaseAmount - (purchaseAmount * discount);
  console.log(`Сумма к оплате со скидкой: ${discountedAmount}`);

  const circumference = parseFloat(prompt("Введите длину окружности:"));
const squarePerimeter = parseFloat(prompt("Введите периметр квадрата:"));

const circleRadius = circumference / (2 * Math.PI);
const squareSideLength = squarePerimeter / 4;

if (circleRadius <= squareSideLength / 2) {
  console.log("Окружность может поместиться в указанный квадрат.");
} else {
  console.log("Окружность не может поместиться в указанный квадрат.");
}

let score = 0;

const questions = [
  {
    question: "Какая столица России?",
    options: ["Москва", "Санкт-Петербург", "Казань"],
    correctAnswer: "Москва"
  },
  {
    question: "Какой год является началом нового тысячелетия?",
    options: ["1999", "2000", "2001"],
    correctAnswer: "2001"
  },
  {
    question: "Сколько планет в Солнечной системе?",
    options: ["7", "8", "9"],
    correctAnswer: "8"
  }
];

for (let i = 0; i < questions.length; i++) {
  const userAnswer = prompt(questions[i].question + "\n" + questions[i].options.join("\n"));
  if (userAnswer === questions[i].correctAnswer) {
    score += 2;
  }
}

console.log(`Количество набранных баллов: ${score}`);

function getNextDate(day, month, year) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  
    const daysInMonth = [
      31, // January
      isLeapYear ? 29 : 28, // February
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31 // December
    ];
  
    // Check if the input date is valid
    if (
      month < 1 || month > 12 ||
      day < 1 || day > daysInMonth[month - 1] ||
      year < 0
    ) {
      return "Ошибка! Введена некорректная дата.";
    }
  
    // Calculate the next date
    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;
  
    if (nextDay > daysInMonth[nextMonth - 1]) {
      nextDay = 1;
      nextMonth++;
    }
  
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear++;
    }
  
    return `${nextDay}.${nextMonth}.${nextYear}`;
  }
  
  const day = parseInt(prompt("Введите день:"));
  const month = parseInt(prompt("Введите месяц:"));
  const year = parseInt(prompt("Введите год:"));
  
  const nextDate = getNextDate(day, month, year);
  console.log(`Следующая за введенной датой дата: ${nextDate}`);