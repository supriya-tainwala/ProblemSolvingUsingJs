
function checkPalindrome(string) {

   string.split(" ").join("");
    const len = string.length;

    
    for (let i = 0; i < len / 2; i++) {

       
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const string ="race car"


const value = checkPalindrome(string);

console.log(value);


