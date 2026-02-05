//5. Promise.all polyfill with rejection handling

Promise.all = function(args){
    let arr = [];
    let cnt = 0;
    
    return new Promise((resolve, reject) => {
        
        for(let i = 0; i<args.length; i++){
            
            Promise.resolve(args[i]).then((val) => {
                arr[i] = val;
                cnt++;
                
                if(cnt === args.length)
                    resolve(arr);
            })
            .catch(e => reject(e));
        }
    })
}

 

let p1 = new Promise((resolve, reject) => { 

    setTimeout(() => { 

        resolve('p1 resolved'); 

    }, 4000); 

}); 

let p2 = new Promise((resolve, reject) => { 

    setTimeout(() => { 

        resolve('p2 resolved'); 

    }, 2000); 

}); 

let p3 = new Promise((resolve, reject) => { 

    setTimeout(() => { 

        resolve('p3 resolved'); 

    }, 3000); 

}); 

const p = Promise.all([p1, p2, p3]);
p.then((data) => console.log(data))
.catch(e => console.log(e));


