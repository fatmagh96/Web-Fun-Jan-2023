
function message(){
    alert("Contact us at 555-5555")
}

function addToCart() {
    var number = document.querySelector("#items");
    number.innerText++;
    
}

function changeSorting(element) {
    console.log(element.value);
    if(element.value=="Price"){
        document.querySelector(".sortedBy").innerText = "Price";
    }
    else if(element.value=="Best Selling"){
        document.querySelector(".sortedBy").innerText = "Best Selling";
    }
    
}