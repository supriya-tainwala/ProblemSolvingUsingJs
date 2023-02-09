function numberOfDigit(Number) {
    let digit = 0;
    while (Number > 0) {
      digit++;
  
      Number = Math.floor(Number / 10);
    }
    return digit;
  }
  
  function rotateNumberByK(Number, K) {
    let X = numberOfDigit(Number);
  
    K = ((K % X) + X) % X;
    let left_no = Math.floor(Number / Math.floor(Math.pow(10, X - K)));
  
    Number =Number % Math.floor(Math.pow(10, X - K));
  
    
    let left_digit = numberOfDigit(left_no);
  
    Number = Number * Math.floor(Math.pow(10, left_digit)) + left_no;
  
    console.log(Number);
  }
  
  let Number = 12345,
    K = 7;
  
  rotateNumberByK(Number, K);