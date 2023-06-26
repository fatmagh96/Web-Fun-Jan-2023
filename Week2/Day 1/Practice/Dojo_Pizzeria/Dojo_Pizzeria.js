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


