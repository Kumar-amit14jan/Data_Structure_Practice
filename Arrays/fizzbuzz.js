function fizzBuzz(n){
    if(n%3==0 && n%5 != 0){
        return "FIZZ";
    }else if(n%5==0 && n %3 !=0){
        return "BUZZ";
    }else if(n%3 == 0 && n%5==0){
        return "FIZZBUZZ";
    }else{
        return n;
    }
}

console.log(fizzBuzz(2));
console.log(fizzBuzz(15))