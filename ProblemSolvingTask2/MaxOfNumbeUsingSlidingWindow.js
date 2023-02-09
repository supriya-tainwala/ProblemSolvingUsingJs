let maxSum = 0;
let Sum = 0;

let slidingWindow = async function (arr, numberOfElement) {
    if (numberOfElement > len || numberOfElement < 0) {
        await errorhandle();
    }
    try {
        for (let i = 0; i < numberOfElement; i++) {
            maxSum += arr[i];
        }
        Sum = maxSum;
        for (let i = numberOfElement; i < len; i++) {
            Sum = Sum - arr[i - numberOfElement] + arr[i];
            if (Sum > maxSum) {
                maxSum = Sum;
            }
        }
        return maxSum;
    } catch (exception) {
        console.log("Exception is caught by catch:" + exception);
    }
};

let errorhandle = function () {
    console.log("please Enter enough elements");
};
let arr = [1, 0,0,0];
let len = arr.length;
let numberOfElement = 3;
console.log(slidingWindow(arr, numberOfElement));
