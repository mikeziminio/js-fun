function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved value');
        }, 2000);
    });
}

async function fun2() {
    console.log(2);
    await fun1(); // первый await - дойдя до него функция СРАЗУ вернёт Promise, а всё остальное обернётся в then
    console.log(4);
    await fun1(); // second await
    console.log(5);
    return 'just string';
}

console.log(1);

/** @type {Promise} p  */
let p = fun2();
console.log(3);