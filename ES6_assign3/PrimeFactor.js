

    function primeFactors(number)
    {
        
        while (number % 2 == 0)
        {
            console.log(2);
            number = Math.floor(number/2);
        }
     
        
        for (let i = 3; i <= Math.sqrt(number); i = i + 2)
        {
           
            while (number % i == 0)
            {
                console.log(i);
                number = Math.floor(number/i);
            }
        }
     
       
        if (number > 2)
            console.log(number + " ");
    }
     
 
      
        let number = 224;
        primeFactors(number);
     