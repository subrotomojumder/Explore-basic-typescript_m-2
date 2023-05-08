"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(12, 5);
const addArrow = (num1, num2 = 0) => num1 + num2;
// typescript array multiple value
const arr = [1, 2, 5, 6];
const newArray = arr.map((elem) => elem * elem);
const person = {
    name: 'Jakir',
    myMoney: 454,
    addBalance(taka) {
        return `My new balance ${taka + this.myMoney}`;
    }
};
const heroin = {
    name: "Ripat",
    role: 566,
    bangoli: 14,
    results(english) {
        return english + this.bangoli;
    }
};
