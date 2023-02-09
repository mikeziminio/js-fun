
class Event {
    id;
    constructor(id) {this.id = id;}   
}

const constructorObj = {
    id: 5
};

Object.setPrototypeOf(constructorObj, Event.prototype);

// Object.defineProperty(constructorObj, 'eventStartTime', { value: '2022-03-22' });

/*
const newEvent = Object.create(Event.prototype);
Event.prototype.call(newEvent, 5);
*/

console.log(constructorObj);