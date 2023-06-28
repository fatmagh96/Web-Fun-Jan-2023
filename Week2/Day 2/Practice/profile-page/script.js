console.log("page loaded...");

function changeName(){
    document.querySelector(".card-body>h1").innerText = "Rebekah Harkness";
}

var arr = document.querySelectorAll(".card-list-item");
function delete_item(index) {
    arr[index].remove();
}

function decrease() {
    var num = document.querySelector(".badge");
    num.innerText--;   
}

function increase() {
    var num = document.querySelectorAll(".badge").item(1);
    num.innerText++; 
}