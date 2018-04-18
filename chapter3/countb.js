//Write a function which takes a string and counts the occurrences of a target letter within that string 
function countBs(x,y="B"){
    let counter = 0;
    for(let i=0; i < x.length; i++){
        if(x[i] == y){
            counter++;
        }
    }
    return counter;
}

//This function is kind of redundant but the exercise also said to create and use it
function countChar(word,target){
    return countBs(word,target);
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
