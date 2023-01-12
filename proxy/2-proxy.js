
const car = {mark: "Opel", model: "Astra"};

const c = new Proxy(car, {
    get(obj, key) {
        console.log(`get ${key}`);
        return obj.key;
    },
    set(obj, key, value) {
        console.log(`set ${key} to ${value}`);
        return (obj.key = value);
    },
    has(obj, key) {
        return true;
    }
});


c.mark = "BMW";

console.log('bug' in c); // true потому что has() возвращает true
console.log('c.bug:', c.bug); // BMW (bug)
