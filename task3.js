// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

function newEmptyObj(objName) {
    objName = {};
    return objName;
}

console.log(newEmptyObj('newObj'));