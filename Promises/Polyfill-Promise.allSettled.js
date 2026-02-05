//6. Promise.allSettled polyfill returning status objects

Promise.allSettled = function (args) {
    let arr = [];
    let cnt = 0;

    return new Promise((resolve, reject) => {

        if (args.length === 0) {
            resolve([]);
        }

        for (let i = 0; i < args.length; i++) {

            Promise.resolve(args[i]).then((val) => {
                arr[i] = { status: 'fulfilled', value: val };

                cnt++;
                if (cnt === args.length)
                    resolve(arr);
            })
                .catch(e => {
                    arr[i] = { status: 'rejected', reason: e };

                    cnt++;
                    if (cnt === args.length)
                        resolve(arr);
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

    }, 2000);

});

let p3 = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve('p3 resolved');

    }, 3000);

});

const p = Promise.allSettled([p1, p2, p3]);
p.then(data => console.log(data))
.catch(e => console.log(e));