function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}


var pizza1 = pizzaOven("deep dish","traditional", ["mozarella"], ["pepperoni","sausage"]);

var pizza2 = pizzaOven("hand tossed","marinara", ["mozarella","feta"], ["mushrooms","olives","onions"]);

var pizza3 = pizzaOven("cheesy crust","tomato sauce", ["mozarella","raclette"], ["ananas","ham"]);

var pizza1 = pizzaOven("neapolitan","marinana", ["vegan cheese"], ["oregano"]);

var pizza_crust = ["Thin Crust", "Thick Crust", "Stuffed Crust", "Cauliflower Crust"];
var pizza_sauce = ["Tomato Sauce", "Pesto Sauce", "Barbecue Sauce", "White Sauce"];
var pizza_cheese = ["Mozzarella", "Cheddar", "Parmesan", "Gouda"];
var pizza_toppings = ["Pepperoni", "Mushrooms", "Bell Peppers", "Olives"];




function rnd() {
    return Math.floor(Math.random()*4)
}


function randomPizza() {
    return pizzaOven(pizza_crust[rnd()],pizza_sauce[rnd()],pizza_cheese[rnd()],pizza_toppings[rnd()]);
}

// console.log(randomPizza());