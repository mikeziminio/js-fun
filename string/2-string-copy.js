let original = "Hello World!"; // string primitive 
let copy1 = original.slice(0); // string primitive 
let copy2 = new String(original); // String object

console.log(copy1); // Hello World!
console.log(typeof copy1); // string
console.log(copy1 instanceof String); // false, copy1 is string primitive
console.log(Object.prototype.toString.call(copy1)); // [object String] - вот так лучше всего проверять является ли объект строкой

console.log(copy2); // [String: 'Hello World!']
console.log(typeof copy2); // object
console.log(copy2 instanceof String); // true, copy2 is instance of String class 
console.log(Object.prototype.toString.call(copy2)); // [object String] - вот так лучше всего проверять является ли объект строкой

let copy3 = String(original);

console.log(copy3); // 'Hello World!'
console.log(typeof copy3); // string
console.log(copy3 instanceof String); // false, copy3 is string primitive 
console.log(Object.prototype.toString.call(copy3)); // [object String] - вот так лучше всего проверять является ли объект строкой
