'use strict'

let money = prompt("Ваш бюджет на месяц в рублях?", "");
let date = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: date,
    expenses: {}, //обязательные расходы
    optionalExpenses: {}, //необязательные расходы
    income: [],
    savings: false,
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько обойдётся?', ''),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt('Во сколько обойдётся?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);