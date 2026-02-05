//7. Promise.race polyfill resolving or rejecting on first settled
Promise.race = function(args){
    let arr = [];
    let cnt = 0;

    // if(args.length > 0 && typeof args[0] === 'number') return Promise.resolve(args[0]); 
     
    return new Promise((resolve, reject) => {
        
        for(let i = 0; i<args.length; i++){
            
            Promise.resolve(args[i]).then((val) => {
                
                cnt++;
                if(cnt === 1)
                    resolve(val);
            })
            .catch(e => {
                
                cnt++;
                if(cnt === 1)
                    reject(e);
            });
            
            
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

    }, 3000); 

});

const p = Promise.race([p1, 10]);

p.then((data) => console.log(data))
.catch(e => console.log(e));