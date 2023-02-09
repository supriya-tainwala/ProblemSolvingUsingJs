


//     const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

// function removeDuplicate(arr) {
//     const result = [];
//     let idx = 0;
//     const tmp = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (!tmp[arr[i]]) {
//             tmp[arr[i]] = 1;
//             result[idx] = arr[i];
//             idx++;
//         } 
//     }
//     return result;
// }

// console.log(removeDuplicate(input));



const input1 = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];
for(i=0;i<input1.length;i++)
{
    for(j=i+1;j<input1.length;j++)
    {
        if(input1[i]===input1[j])
        {
            input1.remove(input1[j]);
        }
    }
}
console.log(input1);