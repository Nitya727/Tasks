// Memoization utility with cache eviction strategy

const memoize = function (fn) {

    const cache = new Map();

    return function (...args) {

        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log('cached result ');

            return cache.get(key);
        }

        console.log('computed result ');


        const res = fn(...args);

        cache.set(key, res);

        return res;
    }

}

const add = function (...args) {
    return args.reduce((acc, x) => acc + x, 0);
}

const f = memoize(add);

console.log(f(2, 3));

console.log(f(2, 3, 5));

console.log(f(2, 3));

