//4. Polyfill for Function.prototype.bind

Function.prototype.myBind = function (...args1) {
    let obj = args1[0];
    let fn = this;

    return function (...args2) {
        fn.call(obj, ...args1.slice(1), ...args2);
    }
}



const obj = {
    name: 'abc',
    age: 21
}

function print(city) {
    console.log(this.name + this.age + city)
}

const f = print.myBind(obj);
f('hyd');