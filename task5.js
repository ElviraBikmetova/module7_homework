// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.

let totalPower = 0;
class ElAppliance {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
        this.material = 'металл/пластик';
    }

    getPower = function(status, power) {
        if (status == 'on') {
          totalPower += power;
        } else if (status == 'off') {
          totalPower
        }
      return totalPower;
    }
}

const getTotalPower = function() {
    console.log(`Суммарная потребляемая мощность всех включенных приборов - ${totalPower}`);
  }

class Laptop extends ElAppliance {
    constructor(brand, color, weight) {
        super(weight);
        this.brand = brand;
        this.color = color;
    }
    getColor() {
        console.log(`Цвет этого ноутбука - ${this.color}`);
    }
}

class Monitor extends ElAppliance {
    constructor(brand, diagonal) {
        super();
        this.brand = brand;
        this.diagonal = diagonal;
    }
    getDiagonal() {
        console.log(`Диагональ этого монитора - ${this.diagonal} дюймов`);
    }
}

const smartphone = new ElAppliance('smartphone', 194);
const laptop = new Laptop('Xiaomi Mi', 'серый');
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