
const rightShiftZero = function (array) {
    try{
    // console.log(array);
    let i;
    let len = array.length;
    let start = 0;
    for (i = 0; i < len; i++)

        if (array[i] !== 0)
            array[start++] = array[i];
    while (start < len)
        array[start++] = 0;


    console.log(array);
    }
    catch(exception)
    {
        return `error is handled by catch: ${exception}`;
    }

}

let array = [-6,00,000,65];
rightShiftZero(array);