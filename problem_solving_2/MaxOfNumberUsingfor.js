let maxSum=0;
let slidingWindow = async function(arr, numberOfElement){
    const len = arr.length;
    if (numberOfElement> len || numberOfElement<0){
        await errorhandle();
    }
   try{
    for (let i = 0; i < len - numberOfElement + 1; i++){
      let sum=0;
    for (let j = 0; j < numberOfElement; j++){
      sum += arr[i+j];
    }
    if (sum > maxSum){
      maxSum = sum;
    }
  }
  return maxSum;

   }
   
   catch (exception) {
    console.log("Exception is caught by catch:"+exception);
  }
  }
  let errorhandle = function () {
   console.log("please enter the correct number of elements");
  };
  let arr = [4];
 
  let numberOfElement = -5;
  console.log(slidingWindow(arr, numberOfElement));
   