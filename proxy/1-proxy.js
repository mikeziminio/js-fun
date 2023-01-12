
const car = {mark: "Opel", model: "Astra"};

const c = new Proxy(car, {});

console.dir(c);

console.dir(c.mark);
console.dir(c.model);

console.log(c.forter); // undefined
// console.log(c.forter.morter); // Cannot read property
console.log(c.forter?.morter); // undefined
