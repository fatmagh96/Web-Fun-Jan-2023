let start = Date.now();
var countPositives = 0;
var numbers = [3,4,-2,7,16,-8,0];

for (var i=0;i<numbers.length;i++){
    if (numbers[i]>=0){
        countPositives += 1;
    }
}

console.log("there are "+ countPositives + " positive values (including zero hehe)");
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");


// Algo Exercices

// https://docs.google.com/spreadsheets/d/1AuGt0ihsR6_uSLfx3mwpYiCrKVp2DdLqN16ccaYxfMU/edit#gid=462018514




// for (var i=0;i<10;i++){
//     console.log(i);
//     i = i+3;
// }
// console.log("outside of the loop ", i);