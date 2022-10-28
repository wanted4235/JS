'use strict'

let money, date;

//функция инициализации бюджета и даты расчёта
function start() {
    money = +prompt("Ваш бюджет на месяц в рублях?", "");
    date = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц в рублях?", "");
    }
}

//функция инициализации бюджета и даты расчёта
start();

//Объект счёта
let appData = {
    budget: money,
    timeData: date,
    expenses: {}, //обязательные расходы
    optionalExpenses: {}, //необязательные расходы
    income: [],
    savings: true,
};

//Функция ввода обязательных расходов в месяц
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt('Во сколько обойдётся?', '');

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('Неверный формат данных');
            i--;
        }
    };
}

//Функция ввода обязательных расходов в месяц
chooseExpenses();

//Вывод ежедневного бюджета
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

//Вывод ежедневного бюджета
detectDayBudget();

//Блок кода с расчетом уровня достатка
function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData <= 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    }
    else {
        console.log("Неверный тип данных");
    }
}

//Блок кода с расчетом уровня достатка
detectLevel();

//Расчёт накоплений в месяц с вклада
function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Ваша сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed(1));
    }
}

//Расчёт накоплений в месяц с вклада
checkSavings();

//Функция вычисления необяхательных расходов
function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let optExpensesItem = prompt("Статья необязательных расходов?");
        if (typeof (optExpensesItem) == "string" && optExpensesItem != "" && optExpensesItem != null) {
            appData.optionalExpenses[i] = optExpensesItem;
            console.log("doneOptExpenses");
        } else {
            i--;
        }
    }
}

chooseOptExpenses();