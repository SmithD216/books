//Write a function which takes two arguments and returns their minimum

function min(x,y){
    if(x == y){
        console.log("Both numbers are equal.");
    } else if(x > y){
        console.log(`${y} is the lower number.`);
    } else {
        console.log(`${x} is the lower number.`);
    }
}

min(7, 99);
min(0, 10);
min(0, -10);