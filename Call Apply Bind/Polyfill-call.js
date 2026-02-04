Function.prototype.call = function(obj, ...args){
    obj = obj ?? globalThis;
    let fn=Symbol()
    obj[fn] = this;

    obj[fn](...args)

    delete obj[fn];
}

let user={
    name:'abc',
    age:20
}
let user1={
    name:'kjdabc',
    age:20
}
function print(city){
    console.log(this.name + this.age + city);
    
}
print.call(user1, 'hyd');