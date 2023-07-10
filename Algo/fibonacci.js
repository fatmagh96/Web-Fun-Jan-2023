// ************** ALWAYS HUNGRY ************** //

function alwaysHungry(arr) {
    // your code here
    var foodExist = false;
    for (let i=0;i<arr.length;i++){
        if (arr[i]=="food"){
            foodExist = true;
            console.log("yummy");
        }
    }
    if (!foodExist) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// ************************************

console.log("\nNEXT CHALLENGE: \n");

// ************ HIGH PASS FILTER ************

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
        
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// ************************************

console.log("\nNEXT CHALLENGE: \n");

// ************ BETTER THAN AVERAGE ************

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum/arr.length;
    var count = 0
    // count = highPass(arr,average).length;
    // count how many values are greated than the average
    for (let j=0;j<arr.length;j++){
        if (arr[j]>average) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// ************************************

console.log("\nNEXT CHALLENGE: \n");

// ************ ARRAY REVERSE ************

function reverse(arr) {
    // your code here
    for (let i=0;i<arr.length/2-1;i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// ************************************

console.log("\nNEXT CHALLENGE: \n");

// ************ FIBONACCI ARRAY ************


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    var sum = 0;
    var i = 0;
    while (fibArr.length<n){
        sum = fibArr[i] + fibArr[i+1];
        fibArr.push(sum);
        i ++;
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
