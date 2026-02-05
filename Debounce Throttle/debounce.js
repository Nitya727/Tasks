// Debounce utility with immediate and trailing options

const apiHandle = () => {
    console.log('api called ' + document.querySelector('input').value);
}

const debounce = function (fn, delay, options) {
    let timerId = undefined;

    if (options.leading && !options.trailing) {

        return function () {
            if(timerId) return;

            fn();

            timerId = setTimeout(() => {
                timerId = undefined;
            }, delay);
        }
    }


    if (!options.leading && options.trailing) {

        return function () {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                fn();
            }, delay);
        }
    }

    if (options.leading && options.trailing) {
        let first = true;
        let last = false;

        return function(){
            //leading - > 1st time called
            if(!timerId){

                fn();
            }
            //trailing 
            else{
                last = true;
            }

            timerId = setTimeout(() => {
                if(last){
                    fn();
                    last = false;
                }
                timerId = undefined;
            }, delay)
        }
    }

}

const options1 = {
    leading: true,
    trailing: false
}
const debounceHelper = debounce(apiHandle, 300, options1);

document.querySelector('input').addEventListener('keyup', () => {
    debounceHelper();
})



