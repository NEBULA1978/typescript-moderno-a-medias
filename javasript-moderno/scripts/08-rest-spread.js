
//SPREAD con array
let heroes = ["Breain", "Spiderman", "Superman","Venom","Aquaman"];

console.log(heroes);

//para sacar de manera individual como si fueran string
console.log(heroes[0], heroes[1], heroes[2]);

//para sacar de manera individual como si fueran string : spread
console.log(...heroes);

//para sacar de manera individual como si fueran string : spread con funcion
function mostrarHeroes(heroe1, heroe2){
    console.log(`
        ****MIS DOS SUPERHEROES FAVORITOS****
        -${heroe1}
        -${heroe2}
        fin.
    `);
}

mostrarHeroes("Batman","Spiderman");
mostrarHeroes(...heroes);

let superheroes = ["Flash", "Catwoman", ...heroes];

console.log(superheroes);


//REST: 
//funciona muy parecido al spread , pero lo que hace al representar un numero //indefinidos de parametros usando un array, se puede utilizar en funciones

function peliculas(pelicula1, pelicula2, ...restoDePeliculas){
    console.log(pelicula1);
    console.log(pelicula2);
    for(pelicula of restoDePeliculas){
        console.log(pelicula);

    }
}

peliculas("El señor de los anillos", 
         "Fast and Furious  9",
         "Batman y Superman",
         "Gran Torino",
         "SIn Limites",
);