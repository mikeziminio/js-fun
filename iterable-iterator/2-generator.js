'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

// The yield operator is used to pause and resume a generator function.

function* numbers(from, to) {
    while (from <= to) { yield from++ };
}

let fn = numbers(3, 10);

console.log(fn.next().value); // 3
console.log(fn.next().value); // 4
console.log(fn.next().value); // 5



Array.fromRange = function(from, to) {
    return Array.from(numbers(from, to));
}

let newArr = Array.fromRange(5, 20);

console.log(newArr);

/*

[
   5,  6,  7,  8,  9, 10,
  11, 12, 13, 14, 15, 16,
  17, 18, 19, 20
]

*/

function* generator(initialValue, fnGerenateValue, fnCheckValue) {
    if (fnCheckValue(initialValue)) {
        yield initialValue;
    }
    let prevValue = initialValue;
    while (true) {
        let newValue = fnGerenateValue(prevValue);
        if (fnCheckValue(newValue)) {
            yield newValue;
        } else {
            break;
        }
        prevValue = newValue;
    }
}

Array.fromGenerator = function(initialValue, fnGerenateValue, fnCheckValue) {
    return Array.from(generator(initialValue, fnGerenateValue, fnCheckValue));
}


let newArray2 = Array.fromGenerator(1, (v) => v + 1, (v) => v <= 15);

console.log(newArray2);

/*

[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15
]

*/

let newArray3 = Array.fromGenerator(10, (v) => v * 10, (v) => v <= 10 ** 10);

console.log(newArray3);

/*

[
          10,         100,
        1000,       10000,
      100000,     1000000,
    10000000,   100000000,
  1000000000, 10000000000
]

*/