'use strict';

const d1 = Date.now(); // текущее время в милисекундах
console.log(d1) // 1673724374159

const d2 = new Date(); // текущее время
const d3 = new Date(Date.now() + 1000 * 60); // + 1 минута

console.log(d2); // 2023-01-14T19:33:57.192Z
console.log(d3); // 2023-01-14T19:34:57.192Z

const d4 = new Date('2023-02-14T19:34:57.192Z');
const d5 = d4.getTime(); // преобразовать время в милисекунды
console.log(d5); // 1676403297192

// вычитание одного Date из другого Date дает количество милисекунд разницы
console.log(d4 - d2); // 2678142579

console.clear();

// объект для сравнивнения двух произвольных дат

function PDateInterval(m) {
    this.m = m;
}

Object.assign(PDateInterval.prototype, {
    SECOND: 1000,
    MINUTE: 1000 * 60,
    HOUR: 1000 * 60 * 60,
    DAY: 1000 * 60 * 60 * 24
});

PDateInterval.prototype.getDays = function() {
    return Math.floor(this.m / this.DAY);
}

PDateInterval.prototype.getHours = function() {
    return Math.floor((this.m % this.DAY) / this.HOUR);
}

PDateInterval.prototype.getMinutes = function() {
    return Math.floor((this.m % this.HOUR) / this.MINUTE); 
}

PDateInterval.prototype.getSeconds = function() {
    return Math.floor((this.m % this.MINUTE) / this.SECOND);
}

// const di = new PDateInterval(d4 - d2);

const di = new PDateInterval(
    12 * PDateInterval.prototype.DAY +
    5 * PDateInterval.prototype.HOUR +
    130 * PDateInterval.prototype.MINUTE +
    30 * PDateInterval.prototype.SECOND);

console.log(di.getDays());      // 12
console.log(di.getHours());     // 7
console.log(di.getMinutes());   // 10
console.log(di.getSeconds());   // 30

console.clear();

class DateInterval {

    static SECOND = 1000;
    static MINUTE = 1000 * 60;
    static HOUR   = 1000 * 60 * 60;
    static DAY    = 1000 * 60 * 60 * 24;

    constructor(m) {
        this.m = m;
    }

    getDays() {
        return Math.floor(this.m / DateInterval.DAY);
    }
    
    getHours() {
        return Math.floor((this.m % DateInterval.DAY) / DateInterval.HOUR);
    }
    
    getMinutes() {
        return Math.floor((this.m % DateInterval.HOUR) / DateInterval.MINUTE); 
    }
    
    getSeconds() {
        return Math.floor((this.m % DateInterval.MINUTE) / DateInterval.SECOND);
    }
}

const di2 = new DateInterval(
    12 * DateInterval.DAY +
    5 * DateInterval.HOUR +
    130 * DateInterval.MINUTE +
    30 * DateInterval.SECOND);

console.log(di2);

console.log(di.getDays());      // 12
console.log(di.getHours());     // 7
console.log(di.getMinutes());   // 10
console.log(di.getSeconds());   // 30


class BigDateInterval extends DateInterval {

}

const di3 = new BigDateInterval(
    12 * BigDateInterval.DAY +
    5 * BigDateInterval.HOUR +
    130 * BigDateInterval.MINUTE +
    30 * BigDateInterval.SECOND);

console.log(di3);
