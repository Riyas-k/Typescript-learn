"use strict";
let num = 123456789;
let names = 'Riaaz';
let isTrue = true;
let newArr = [];
function render(doc) {
    console.log(doc);
}
let numbers = [1, 2, 3];
let arr = [];
let persons = [199, 'hello'];
console.log(3);
function sample(number, price = 2022) {
    if (price > 5000) {
        return number * 10;
    }
    else {
        return number;
    }
}
sample(19990);
let employee = {
    id: 1,
    retire: (date) => {
        console.log(date);
    }
};
employee.name = 'mosh';
function kiloGran(weight) {
    if (typeof weight === 'number')
        return weight * 2;
    else
        return parseInt(weight) * 4;
}
kiloGran(10);
kiloGran('100');
//# sourceMappingURL=sample.js.map