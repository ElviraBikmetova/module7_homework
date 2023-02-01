// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const someObj = {
    a: 1,
    2: 'second',
    true: false,
    some: undefined
}

function getObj(obj) {
    for (let key in someObj) {
        if (someObj.hasOwnProperty(key)) {
            console.log(key, someObj[key]);
        }
    }
}

getObj(someObj);