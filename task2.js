// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const someObj = {
    a: 1,
    2: 'second',
    true: false,
    some: undefined
}

function property(str, obj) {
    return str in obj;
}

console.log(property('some', someObj));