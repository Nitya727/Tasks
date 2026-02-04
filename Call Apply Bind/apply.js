Function.prototype.apply = function(obj,...args){
    console.log(args);
    
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
function print([city,day]){
    console.log(this.name + this.age + city+day);
    
}
print.apply(user, ['hyd','tuesday']);

