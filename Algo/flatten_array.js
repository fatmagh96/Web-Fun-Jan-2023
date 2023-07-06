// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for (let i=0;i<arr2d.length;i++){
        for (let j = 0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
            
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]


function  isPresent2d(arr2d, value){
    for (let i=0;i<arr2d.length;i++){
        for (let j = 0; j < arr2d[i].length; j++) {
            if (arr2d[i][j]==value){
                return true;
            }
        }
    }
    return false;
}



var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];



console.log(isPresent2d(arr2d, 6));

console.log(isPresent2d(arr2d, 10));
