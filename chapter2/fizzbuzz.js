//Print all numbers from 1 to 100
//For numbers divisble by 3 print "Fizz"
//For numbers divisible by 5 but not 3 print "Buzz"
//For numbers divisible by both print "FizzBuzz"
let result = "";
for(let i=1;i<101;i++){
    if(i%3 == 0 && i%5 ==0){
        result = "FizzBuzz";
    } else if(i%3 == 0){
        result = "Fizz"
    } else if(i% 5 == 0){
        result = "Buzz";
    } else {
        result = i;
    }
    console.log(result);
}