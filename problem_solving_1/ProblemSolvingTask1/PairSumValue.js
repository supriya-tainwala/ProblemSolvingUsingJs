

const pairSum = function (array, len, sum) {
    try {
        array.sort((a, b) => a - b);
        let result = 0;

        let i = 0,
            j = len - 1;

        while (i < j) {
            if (array[i] + array[j] < sum) i++;
            else if (array[i] + array[j] > sum) j--;

            else {
                let ithElement = array[i],
                    ithIndex = i;
                while (i < j && array[i] == ithElement) i++;
                let jthElement = array[j],
                    jthIndex = j;
                while (j >= i && array[j] == jthElement) j--;
                if (ithElement == jthElement) {
                    let temp = i - ithIndex + jthIndex - j - 1;
                    result = result + (temp * (temp + 1)) / 2;
                } else result = result + (i - ithIndex) * (jthIndex - j);
            }
        }
        return Boolean(result);
    }
    catch (exception) {
        return `exception is caught by catch: ${exception}`;
    }
}


const array = [-1, -3, -1];
const len = array.length;
let sum = -2;
console.log(pairSum(array, len, sum));



