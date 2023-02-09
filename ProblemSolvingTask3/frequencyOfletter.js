var charRepeats = function(str) {
    let count=1;
   
    for(var i = 0; i <= str.length; i++) {
        for(var j = i+1; j <= str.length; j++) {
            if(str[j] == str[i]) {
             count++;
             return count;
            }
           
        }
    }
    return true;
}


console.log(charRepeats("hexagonal"));