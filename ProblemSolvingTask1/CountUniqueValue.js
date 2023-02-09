

const countValues = (arr) => {
   try{
    const len = arr.length;
   const newArray = {};
   for (var i = 0; i < len; i++) {
      newArray[arr[i]] = 1 + (newArray[arr[i]] || 0);
   };
   return newArray;
}
catch(exception)
{
   return `exception is caught by catch: ${exception}`;
}}
const arr = [];
console.log(countValues(arr));