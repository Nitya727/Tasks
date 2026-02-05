// Throttle utility with leading and trailing modes

const btnHandle = () => {
    console.log('button clicked');

}

const throttle = function (fn, delay, options) {
    let flag = true;

    if (options.leading && !options.trailing) {

        return function () {
            if (flag) {
                fn();
                flag = false;
                setTimeout(() => {
                    flag = true;
                }, delay);
            }
        }
    }


    if (!options.leading && options.trailing) {

        return function () {
            if (flag) {
                flag = false;
                setTimeout(() => {
                    flag = true;
                    fn();
                }, delay);
            }
        }
    }

    if (options.leading && options.trailing) {
        let first = true;
        let last = false;

        return function () {
            if (first) {
                fn();
                first = false;

                setTimeout(() => {
                    first = true;

                    if(last){
                        fn();
                        last = false;
                    }
                }, delay);
            }
            else last = true;
        }
    }
}

const options2 = {
    leading: true,
    trailing: true,
}

const throttleHelper = throttle(btnHandle, 1000, options2)


document.querySelector('button').addEventListener('click', () => {
    throttleHelper();
})

