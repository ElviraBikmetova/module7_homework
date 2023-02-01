// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент).
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:
// Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создайте экземпляры каждого прибора.
// Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

// Общие требования:
// Имена функций, свойств и методов должны быть информативными
// Соблюдайте best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

let totalPower = 0;
function ElAppliance(name, weight) {
    this.name = name,
    this.weight = weight,
    this.material = 'металл/пластик'
}

ElAppliance.prototype.getPower = function(status, power) {
    if (status == 'on') {
      totalPower += power;
    } else if (status == 'off') {
      totalPower
    }
  return totalPower;
}

const getTotalPower = function() {
  console.log(`Суммарная потребляемая мощность всех включенных приборов - ${totalPower}`);
}

function Laptop(weight, brand, color) {
    this.weight = weight,
    this.brand = brand,
    this.color = color
}

Laptop.prototype = new ElAppliance();

Laptop.prototype.getColor = function(color) {
    console.log(`Цвет этого ноутбука - ${this.color}`);
}

function Monitor(brand, diagonal) {
  this.brand = brand,
  this.diagonal = diagonal
}

Monitor.prototype = new ElAppliance();

Monitor.prototype.getDiagonal = function(diagonal) {
    console.log(`Диагональ этого монитора - ${this.diagonal} дюймов`);
}

const smartphone = new ElAppliance('smartphone', 194);
const laptop = new Laptop(1800, 'Xiaomi Mi', 'серый');
const monitor = new Monitor('LG', 27);

console.log(smartphone);
console.log(laptop);
console.log(monitor);

laptop.getColor();
monitor.getDiagonal();

smartphone.getPower('off', 5);
laptop.getPower('on', 20);
monitor.getPower('on', 10);

getTotalPower();