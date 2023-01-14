'use strict';

console.log(Object.prototype.toString.call(100)); // [object Number]
console.log(typeof 100); // number
console.log(typeof Number(100)); // number

console.log(typeof new Number(100)); // object
// ...users should never use new with a Number object tho, because it's widely considered a very bad practice to ever use boxed primitives.

console.log(Object.prototype.toString.call(100n)); // [object BigInt]
console.log(typeof 100n); // bigint

// console.log(typeof new BigInt(100));
// TypeError: BigInt is not a constructor
// https://stackoverflow.com/questions/72365203/why-is-bigint-not-a-constructor-function-unlike-number-boolean-and-string

// В общем, все новые классы-обёртки примитивов - BigInt, Symbol - НЕ имеют конструктора
// Старые классы - String, Number, Boolean - имеют конструкторы, но использовать их в новом коде НЕ рекомендуется

/*
...users should never use new with a Number object tho, because it's widely considered a very bad practice to ever use boxed primitives.
The new paradigm (no pun intended) is the one Symbol follows - if you want an object, you have to explicitly pass the primitive into Object.
new Primitive() is a footgun, and new primitives should not continue this LEGACY pattern.
*/

console.log(Object.prototype.toString.call('hello')); // [object String]

console.log(Object.prototype.toString.call(new String('hello'))); // [object String]

console.log(typeof 'hello'); // string
console.log(typeof String('hello')); // string - так делать правильно с примитивами!
console.log(typeof new String('hello')); // object - так делать неверно! это легаси подход

console.log(Object.prototype.toString.call(Symbol('some'))); // [object Symbol]
console.log(Object.prototype.toString.call([1, 2, 3])); // [object Array]
console.log(Object.prototype.toString.call(new Array(2))); // [object Array]
console.log(Object.prototype.toString.call({'1': 2, '3': 4})); // [object Object]
console.log(Object.prototype.toString.call(new Object({'1': 2, '3': 4}))); // [object Object]
console.log(Object.prototype.toString.call((v) => v + 1)); // [object Function]
function fn(v) { return v + 1; }
console.log(Object.prototype.toString.call(fn)); // [object Function]






