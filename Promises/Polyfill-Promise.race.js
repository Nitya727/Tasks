//7. Promise.race polyfill resolving or rejecting on first settled
Promise.race = function(...args){
    let arr = [];
    let cnt = 0;

    if(args[0].length > 0 && typeof args[0][0] === 'number') return Promise.resolve(args[0][0]); 
     
    return new Promise((resolve, reject) => {
        
        for(let i = 0; i<args[0].length; i++){
            let p = args[0][i];
            
            p.then((val) => {
                
                cnt++;
                if(cnt === 1)
                    resolve(val);
            })
            .catch(e => {
                
                cnt++;
                if(cnt === 1)
                    resolve(e);
            });
            
            
        }
    })
}
let p1 = new Promise((resolve, reject) => { 

    setTimeout(() => { 

        resolve('p1 resolved'); 

    }, 4000); 

});

const p = Promise.race([]);

p.then((data) => console.log(data))
.catch(e => console.log(e));