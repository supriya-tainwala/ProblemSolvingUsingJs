const remove = function (array, n) {
    try {
        const arrLen = array.length;
        if (n < 0 || n > arrLen)
            return callError();

        let j = 0;

        let new_array = [];
        for (i = 0; i < arrLen; i++) {
            if (i === n - 1)
                continue;
            new_array[j++] = array[i];
        }
        return new_array;
    }
    catch (exception) {
        return `error is caught by catch: ${exception}`;
    }
}

function callError() {
    console.log("you have to enter the element within the length");
}

let array = [0, 00, 3];

console.log(remove(array, 2));













