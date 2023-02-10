// var charRepeats = function(str) {
//     let count=1;
   
//     for(var i = 0; i <= str.length; i++) {
//         for(var j = i+1; j <= str.length; j++) {
//             if(str[j] == str[i]) {
//              count++;
//              return count;
//             }
           
//         }
//     }
//     return true;
// }


// console.log(charRepeats("hexagonal"));






const str = "Hexagonal"
const n = str.length;
const countUniqueValues = arr => {
   const counts = {};
   for (let i = 0; i < n; i++) {
      counts[arr[i]] = 1 + (counts[arr[i]] || 0);
   };
   return counts;
};
console.log(countUniqueValues(str));



let list = [1,3,3,5,5,5,7];