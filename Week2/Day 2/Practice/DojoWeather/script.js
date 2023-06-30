function dismiss() {
    var a = document.querySelector(".cookies");
    // console.log(a);
    a.remove();   
}

var max = document.querySelectorAll(".max_temp");
console.log(max.length);
console.log(max[0].innerText);
var arr_max = [];
for(var i=0;i<max.length;i++){
    arr_max.push(max[i].innerText);
    // console.log(max[i].innerText);
}
var min = document.querySelectorAll(".min_temp");
console.log(min);
var arr_min = [];
for(var i=0;i<min.length;i++){
    arr_min.push(min[i].innerText);
}

var celsius_max = ["24°","27°","21°","26°"];
var celsius_min = ["18°","19°","16°","21°"];

var fahrenheit_max = ["75°","80°","69°","78°"];
var fahrenheit_min = ["65°","66°","61°","70°"];

function changeUnit(element) {
    console.log(element.value);
    if (element.value == "°F"){
        for(let x=0;x<fahrenheit_max.length;x++){
            max[x].innerText = fahrenheit_max[x];
            min[x].innerText = fahrenheit_min[x];
        }
        // max[0].innerText = "75°";
        // max[1].innerText = "80°";
        // max[2].innerText = "69°";
        // max[3].innerText = "78°";
    }
    else if (element.value == "°C"){
        for(let x=0;x<celsius_max.length;x++){
            max[x].innerText = celsius_max[x];
            min[x].innerText = celsius_min[x];
        }
    }
}