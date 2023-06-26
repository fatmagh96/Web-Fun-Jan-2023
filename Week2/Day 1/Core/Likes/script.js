function addLikes(){
    var e = document.querySelector("#numberOfLikes");
    var likes = parseInt(e.innerText);
    likes++;
    e.innerText = likes;

}
var arr = document.querySelectorAll("#numberOfLikes")

console.log(arr[2].innerText);
