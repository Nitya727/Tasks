// Deep cone utility handling circular references

const deepClone = function(obj, mp){
    //primitives or null
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }

    if(mp.has(obj)) return mp.get(obj);


    const copy =  Array.isArray(obj) ? [] : {};

    mp.set(obj, copy);

    for(let k in obj){
        copy[k] = deepClone(obj[k], mp);
    }

    return copy;
}

let mp = new WeakMap();

const obj1 = {
    a: 10,
    b: [1, 2, 3],
    c: {
        d: [3, 4, 5]
    }
}
obj1.self = obj1;

const obj2 = deepClone(obj1, mp);

obj2.b[1] = 20;

console.log(obj1);
console.log(obj2);
console.log(obj2.self);

