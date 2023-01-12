
const car = {mark: "Opel", model: "Astra", _pro: "pro"};

const c = new Proxy(car, {
    get(obj, key) {
        console.log(`get ${key}`);
        return obj.key;
    },
    set(obj, key, value) {
        console.log(`set ${key} to ${value}`);
        return (obj.key = value);
    },
    ownKeys(obj) {
        return Object.keys(obj).filter(v => !v.startsWith('_')); // тоже самое, что и !(v.indexOf('_') === 0)
    }
});


console.log(Object.keys(c));
