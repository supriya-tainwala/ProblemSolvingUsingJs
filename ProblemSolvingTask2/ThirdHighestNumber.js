let thirdLargest = async function (arr) {
  
    if (len < 3) {
   
    return errorhandle();
  }
  try {
  let first = arr[0];
  for (let i = 1; i < len; i++) 
  if (arr[i] > first) 
  first = arr[i];

  let second = Number.MIN_VALUE;

  for (let i = 0; i < len; i++)
    if (arr[i] > second && arr[i] < first)
     second = arr[i];

  let third = Number.MIN_VALUE;

  for (let i = 0; i < len; i++)
    if (arr[i] > third && arr[i] < second) 
    third = arr[i];

  return third;
  } 
   catch (exception) {
    console.log("Exception is caught by catch:"+exception);
  }
};
let errorhandle = function () {
    console.log("please Enter enough elements to perform the operation!!");
  };

let arr = [12, 13, 1, 1, 10, 10, 34, 16];
const len = arr.length;

console.log("Third Largest " + "element is ", thirdLargest(arr));












// function removeDuplicate(arr) {
//     let length = 0;
//     const tmp = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (!tmp[arr[i]]) {
//             tmp[arr[i]] = 1;
//             arr[length] = arr[i];
//             length++;
//         }
//     }
    
//     // the last element is not a duplicate
//     if (!tmp[arr[arr.length-1]]) {
//         length--;
//     }
//     arr.length = length;
//     return arr;
// }

// const input1 = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];



