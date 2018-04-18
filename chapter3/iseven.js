//Write a recursive function which will determine whether a number is odd or even

function isEven(n){
    let rem = n % 2;
    if(rem === 0){
        return true;
    } else if(rem === 1){
        return false;
    } else {
        isEven(rem - 2);
    }
}

//Should be true
console.log(isEven(50));

//Should be false
console.log(isEven(75));