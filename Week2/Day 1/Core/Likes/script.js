var arr = document.querySelectorAll("#numberOfLikes");

function addLikes(index){
    // var e = document.querySelector("#numberOfLikes");
    var e = document.querySelectorAll("#numberOfLikes")[index];
    var likes = parseInt(e.innerText);
    likes++;
    e.innerText = likes;

}

console.log(arr[2].innerText);
