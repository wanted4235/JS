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
    chooseExpenses: function () { //Функция ввода обязательных расходов в месяц
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
        }
    },
    detectDayBudget: function () { //Вывод ежедневного бюджета
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () { //Блок кода с расчетом уровня достатка
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
    },

    checkSavings: function () { //Расчёт накоплений в месяц с вклада
        if (appData.savings) {
            let save = +prompt("Ваша сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed(1));
        }
    },
    chooseOptExpenses: function () { //Функция вычисления необяхательных расходов
        for (let i = 1; i < 4; i++) {
            let optExpensesItem = prompt("Статья необязательных расходов?");
            if (typeof (optExpensesItem) == "string" && optExpensesItem != "" && optExpensesItem != null) {
                appData.optionalExpenses[i] = optExpensesItem;
                console.log("doneOptExpenses");
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        let answ = prompt('Что ещё может принести дополнительный доход? (указать через зпт)', '');
        while (!isNaN(answ) || typeof (answ) != 'string' || typeof (answ) == null) {
            answ = prompt('Что ещё может принести дополнительный доход? (указать через зпт)', '');
        };
        appData.income = answ.split(',');
        appData.income.push(prompt('Может что то ещё?', ''));
        appData.income.sort();

        appData.income.forEach(function (item, i) {
            console.log(i + 1 + ' cпособ: ' + item);
        });

        for (let key in appData) {
            console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
        }
    },
};