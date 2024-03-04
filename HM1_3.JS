age = int(input("Введите свой возраст: "))

if age >= 0 and age <= 2:
    print("Вы являетесь ребенком")
elif age >= 12 and age <= 18:
    print("Вы являетесь подростком")
elif age >= 18 and age <= 60:
    print("Вы являетесь взрослым")
else:
    print("Вы являетесь пенсионером")

    number = int(input("Введите число от 0 до 9: "))

if number == 0:
    print("!")
elif number == 1:
    print("@")
elif number == 2:
    print("#")
# Добавьте остальные возможные варианты для чисел 3-9
else:
    print("Неправильный ввод")

    number = int(input("Введите трехзначное число: "))

digit1 = number // 100
digit2 = (number // 10) % 10
digit3 = number % 10

if digit1 == digit2 or digit1 == digit3 or digit2 == digit3:
    print("В числе есть одинаковые цифры")
else:
    print("В числе нет одинаковых цифр")

    year = int(input("Введите год: "))

if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
    print("Год является високосным")
else:
    print("Год не является високосным")

    number = input("Введите пятиразрядное число: ")

if number == number[::-1]:
    print("Число является палиндромом")
else:
    print("Число не является палиндромом")

    usd_amount = float(input("Введите количество USD: "))
currency = input("Выберите валюту (EUR, UAN, AZN): ")

if currency == "EUR":
    eur_amount = usd_amount * 0.82
    print("Сумма в EUR: ", eur_amount)
elif currency == "UAN":
    uan_amount = usd_amount * 27.5
    print("Сумма в UAN: ", uan_amount)
elif currency == "AZN":
    azn_amount = usd_amount * 1.7
    print("Сумма в AZN: ", azn_amount)
else:
    print("Неправильный выбор валюты")

    purchase_amount = float(input("Введите сумму покупки: "))

if purchase_amount >= 200 and purchase_amount < 300:
    discount = purchase_amount * 0.03
elif purchase_amount >= 300 and purchase_amount < 500:
    discount = purchase_amount * 0.05
elif purchase_amount >= 500:
    discount = purchase_amount * 0.07
else:
    discount = 0

total_amount = purchase_amount - discount
print("Сумма к оплате со скидкой: ", total_amount)

import math

circumference = float(input("Введите длину окружности: "))
perimeter_square = float(input("Введите периметр квадрата: "))

radius = circumference / (2 * math.pi)
side_length = perimeter_square / 4

if radius <= (side_length / 2):
    print("Окружность может поместиться в указанный квадрат")
else:
    print("Окружность не может поместиться в указанный квадрат")

    score = 0

question1 = input("Вопрос 1: Выберите один из вариантов (A, B, C): ")
if question1.lower() == "a":
    score += 2

question2 = input("Вопрос 2: Выберите один из вариантов (A, B, C): ")
if question2.lower() == "b":
    score += 2

question3 = input("Вопрос 3: Выберите один из вариантов (A, B, C): ")
if question3.lower() == "c":
    score += 2

print("Количество набранных баллов: ", score)

day = int(input("Введите день: "))
month = int(input("Введите месяц: "))
year = int(input("Введите год: "))

if day == 28 and month == 2:  # проверка для февраля и невисокосного года
    if (year % 4 != 0) or (year % 100 == 0 and year % 400 != 0):
        day = 1
        month = 3
    else:
        day += 1
elif day == 30:  # проверка для месяцев с 30 днями
    if month in [4, 6, 9, 11]:
        day = 1
        month += 1
    else:
        day += 1
elif day == 31:  # проверка для месяцев с 31 днем
    if month == 12:
        day = 1
        month = 1
        year += 1
    else:
        day = 1
        month += 1
else:  # остальные случаи
    day += 1

print("Следующая дата: {}/{}/{}".format(day, month, year))