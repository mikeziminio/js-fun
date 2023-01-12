'use strict';

const car = {mark: "Opel", model: "Astra"};

const newCar = Object.assign({}, car);

console.log(car === newCar);
