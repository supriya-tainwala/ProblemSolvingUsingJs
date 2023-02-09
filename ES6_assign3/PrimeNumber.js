(()=>{let number = 8;   
let num1 = 0, num2 = 1;  
let next_term = 0;  
console.log(num1);
console.log(num2);
for (i = 2; i < number; i++) 
{  
if ( i <= 1)   
next_term = i; 
else  
{  
next_term = num1 + num2;  
num1 = num2;  
num2 = next_term;  
}  

console.log( next_term );  
  
} } )();
