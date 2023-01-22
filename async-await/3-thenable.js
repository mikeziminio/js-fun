'use strict';

const obj = {
    then: function(fn) {
        setTimeout(() => {
            fn('hello');
        }, 2000);
    }
};

function getHello() { // возвращает не Promise, а просто объект с полем then
    return obj;
} 

(async function() {
    console.log('start');
    const str = await getHello(); // await работает с thenable, но наружу (не в str, а в return безымянной функции) отдаёт Promise
    console.log(str);
    console.log('end');
})();

async function main2() {
    console.log('start');
    const str = await getHello(); // await работает с thenable, но наружу (не в str, а в return функции main2) отдаёт Promise
    console.log(str);
    console.log('end');
}

console.log(main2()); // Promise { <pending> }
