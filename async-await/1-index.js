'use strict';

function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved value');
        }, 2000);
    });
}

async function fun2() { // если функция содержит в своем стеке вызова await - она всегда возвращает Promise
    console.log('fun2 - 1'); /* 2 */
    let t = await fun1(); // t - это строка, но сама функция fun1() возвращает Promise
    console.log(t);
    console.log('fun2 - 2');
    return 'just string';
}

console.log('main - 1'); /* 1 */
let i = fun2();
console.log('main - 2'); /* 3 */

console.log('i', i); /* i Promise { <pending> } */

setTimeout(() => {
    console.log('i', i); /* i Promise { 'just string' } */
}, 3000);

/*

main - 1
fun2 - 1
main - 2
i Promise { <pending> }
resolved value
fun2 - 2
i Promise { 'just string' }

*/

