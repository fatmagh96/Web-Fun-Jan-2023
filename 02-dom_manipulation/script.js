function deleteElement(id){
    // console.log("Element to remove ID= ", id);
    // document.getElementById(id).remove();
    document.querySelector(`#${id}`).remove();
    console.log("element removed");
}

function like(id){
    var like = parseInt(document.getElementById(id).innerText);
    like++;
    document.getElementById(id).innerText = like;

}

function likeTwo(e){
    console.log(e);
    e.innerText++;
}

function onImage(e){
    console.log(e.src);
    if(e.src == "http://127.0.0.1:5502/images/1.jpg" ){
        e.src = "./images/5.png"
    }
    else {
        e.src = "/images/1.jpg"
    }
}

function onMouseImage(id){
    document.getElementById(id).src = "/images/6.png";
}

function outMouseImage(id){
    document.getElementById(id).src = "/images/2.jpg";
}

function login(){
    setTimeout(enterName,3000)
}
function raiseAlert(){
    alert("Please try to Register")
}

function enterName(){
    prompt("put you name")
}

function message(){
    console.log("delayed message");

}
    console.log("START");
    setTimeout(message,3000);
    console.log("end");

function showInput

// login()