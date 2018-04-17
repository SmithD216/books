//Create a string which represents an 8x8 chess board
let board= "";
let line = "";
let size = 8;

for(let i=0;i<size;i++){
    if(i%2==0){
        line += '#';
    } else {
        line += '-';
    }
}

for(let i=0;i<size;i++){
    line = line.split("").reverse().join("");
    board += line + '\n';
}


console.log(board);