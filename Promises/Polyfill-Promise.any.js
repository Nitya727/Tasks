//8. Promise.any polyfill with AggregateError support

Promise.any = function (args) {

    let cnt = 0;
    let errors = [];

    return new Promise((resolve, reject) => {

        for (let i = 0; i < args.length; i++) {
            Promise.resolve(args[i]).then((val) => {
                resolve(val);
            })
                .catch(e => {
                    errors[i] = e;
                    cnt++;


                    if (cnt === (args.length)) {

                        reject(new AggregateError(errors, 'All promises were rejected'));
                    }
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

    }, 5000);

});

let p3 = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve('p3 resolved');

    }, 3000);

});

const p = Promise.any([10, 20, 30]);
p.then((data) => console.log(data))
    .catch(e => console.log(e));