'use sctrict';

let obj = {
    'a': 0,
    'b': 1,
    'c': 3
};

/*
obj.forEach((val, key) => { // TypeError: obj.forEach is not a function
    console.log(val, key);
});
*/

for (v in obj) {
    console.log(v);
}

// a
// b
// c

/*
for (v of obj) {
    console.log(v); // TypeError: obj is not iterable
}
*/

let map = new Map();
map.set('a', 0);
map.set('b', 1);
map.set('c', 3);

map.forEach((val, key) => { // TypeError: obj.forEach is not a function
    console.log(val, key);
});

// 0 a
// 0 b
// 0 c

for (v in map) {
    console.log(v); // ничего не выводит
}

for (v of map) {
    console.log(v);
}

// ['a', 0]
// ['b', 1]
// ['c', 3]

map = new Map([
    ['Victor', 41],
    ['Mike', 36],
    ['Peter', 42],
    ['Valery', 57],
]);

console.clear();

[
    map.size,
    map.get('Peter'),
    map.set('Mike', 37),
    map.has('Mike'),
    map.delete('Mike'),
    map.entries(),
    map.keys(),
    map.values(),
    map.clear()
].forEach(v => console.log(v));
