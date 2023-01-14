'use strict';

const car = {mark: 'Opel', model: 'Astra'};

const newCar = Object.assign({}, car);

console.log(car === newCar);

const id = 15;
const name = 'Mike'; 
const newObj = {id, name};

console.log(newObj);
