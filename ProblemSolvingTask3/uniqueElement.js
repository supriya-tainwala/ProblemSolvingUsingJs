


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









function deleteDuplicate (arr, num)  
{  
      arr.sort((a,b)=>a-b)
    if (num == 0 || num == 1)  
        return num;  

let j = 0;  
  
 
for (i = 0; i < num - 1; i++)  
{  
    if ( arr[i] != arr[i+1])  
    {  
        arr[j++] = arr[i];  
    }     
      
}  
arr[j++] = arr[num -1];  
return j;  
}  



   
   
    const arr = [3,3,3,3,3,3];  
      
   
    let num = arr.length; 
      
    
    new_len = deleteDuplicate(arr, num);  
      
    // console.log (" Display the unique elements from the sorted array ");  
   
    for ( i = 0; i < new_len; i++)  
    {  
        console.log(arr[i]);  
    }  
  
