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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

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