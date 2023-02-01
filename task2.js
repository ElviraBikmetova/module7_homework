// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const someObj = {
    a: 1,
    2: 'second',
    true: false,
    some: undefined
}
let prop = '2';

function property(str, obj) {
    return prop in someObj;
}

console.log(property(prop, someObj));