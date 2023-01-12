
const car = {
    mark: "Opel",
    model: "Astra",
    get speed() {    // Допустим только такой синтаксис. Getters/setters нельзя объявить при помощи arrow function
        return  Math.random();
    },
    set fo(v) {
        console.log(v);
    },
    toString() {
        return this.mark + ' ' + this.model + ' ' + this.speed;
    }
}

console.log(car.speed);

car.fo = 324;

console.log(car);
console.log(car + ''); // using toString()
