

let SubArray = function(array, arraylen){
 try{
	for (let i = 1; i < arraylen; i++) {
    if (array[i] > array[i - 1]) len++;
    else {
      if (max < len) {
        max = len;

        maxIndex = i - max;
      }
      len = 1;
    }
  }

  if (max < len) {
    max = len;
    maxIndex = arraylen - max;
  }

  for (let i = maxIndex; i < max + maxIndex; i++)
   console.log(array[i]);
 }
 catch (exception) {
  console.log("exception is caught by catch:"+exception);
}
}
let max = 1,len = 1,maxIndex = 0;
let array = [5, 6, 6];
const arraylen = array.length;
SubArray(array,arraylen);