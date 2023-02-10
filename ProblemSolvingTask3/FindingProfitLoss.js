function profitLoss(array,purchasingIndex,sellingIndex){
    const arrayLen = array.length;
    if((sellingIndex>arrayLen-1 || sellingIndex<0) || (purchasingIndex>arrayLen-1 || purchasingIndex<0))
       return callError();
    try{

       let result=array[purchasingIndex]-array[sellingIndex];
       if(result>0)
       {
          return `profit of Rs ${result}`;
       }
       if(result<0)
       {
          return `loss of Rs ${-result}`;
       }
       return `there is no profit and loss`;
    }
    catch(exception)
    {
        console.log("error is handled"+exception);
    }
}

function callError(){
       return `you must enter the index within the length of array`;
    
}

let array=[2,5,3,7,1,9,4];
let result = profitLoss(array,5,6);
console.log(result);