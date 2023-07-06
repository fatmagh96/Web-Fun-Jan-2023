var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id %3 === 0) {
        // console.log(pokémon[i]);
    }
}

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length>1) {
        // console.log(pokémon[i]);
    }
}

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length == 1 && pokémon[i].types[0]=="poison") {
        // console.log(pokémon[i].name);
    }
}

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types[1]=="flying") {
        // console.log(pokémon[i].types[0]);
    }
}

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length == 1 && pokémon[i].types[0]=="poison") {
        var result = "";
        var pokemon = pokémon[i].name;
        for (let x=pokemon.length-1;x>-1;x--){
            result += pokémon[i].name[x];
        }
        // console.log("reverse name: ",result);
        // console.log(pokémon[i].name);
    }
}

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types =="poison") {
        console.log(pokémon[i].name);
    }
}

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length == 1 && pokémon[i].types[0]=="poison") {
        // var result = "";
        var pokemon = pokémon[i].name;
        var len = pokémon[i].name.length;
        console.log(len);
        for (let x=0;x<pokémon[i].name.length/2-1;x++){
            var temp = pokemon[x];
            console.log(temp);
            console.log(pokemon[len-1-x]);
            pokemon[x] = pokemon[len-1-x];
            pokemon[len-1-x] = temp;
            console.log(pokemon);

        }
        console.log("reverse name: ",pokemon);
        // console.log(pokémon[i].name);
    }
}


console.log("*******************************");

for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types=="poison") {
        var len = pokémon[i].name.length;
        console.log(len);
        for (let x=0;x<pokémon[i].name.length/2-1;x++){
            var temp = pokémon[i].name[x];
            console.log(temp);
            console.log(pokémon[i].name[len-1-x]);
            pokémon[i].name[x] = pokémon[i].name[len-1-x];
            pokémon[i].name[len-1-x] = temp;
            console.log(pokémon[i].name);

        }
        console.log("reverse name: ",pokémon[i].name);
        // console.log(pokémon[i].name);
    }
}
