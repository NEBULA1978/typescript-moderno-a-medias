//strings
let nombre = "Ramon Pascual";

//number
let numero =14;
let decimal = 3.2;

//bolean 
let mayor_edad = true;
let menor_edad = Boolean(0);// 1 es true 0 es false

//array
let paises = ['España','Mexico', 'Colombia', 'Argentina'];

//NULL algo esta vacio nulo
let vacio = null;

// Undefined valor no asignado o indefinido
let no_definido = undefined;

// JSON - Javascript object notation -objetos literales

let pelicula = {
    titulo: "Space jam",
    genero: "Animacion",
    anio: 1996,
    director: "Tarantino",
    mostrar: function(){
      //funcion flecha arriba
      //templates string abajo
      return `
            ++++ LA PELICULA DE LA SEMANA ++++ \n
            Titulo: ${this.titulo} \n
            Genero: ${this.genero} \n
            Año: ${this.anio} \n
            Director: ${this.director} \n
        `;
    }
}
//puedo agregar de las dos formas de abajo
//pelicula.pais = "Estados unidos";
pelicula["pais"] = "Estados unidos";

//eliminar dentro json objeto
delete pelicula.director;
//delete pelicula['anio'];

//para dejar un valor a null no elimino la propiedad eje
pelicula.genero = null;

//comprobar si esta una propiedad dentro de un objeto
//console.log("titulo" in pelicula);

//recorrer objeto con for in
for(let propiedad in pelicula){
    let dato_actual = pelicula[propiedad];
    if(dato_actual !== null && typeof(dato_actual) !== "function"){

        console.log(dato_actual);
    }
}

console.log(pelicula);

//console.log(pelicula.titulo, " - ", pelicula.genero, " - ", pelicula.anio);
//console.log(pelicula.mostrar());
//alert(pelicula.mostrar());

// symbol identificador unico
let animal = Symbol("tigre");
let animal2 = Symbol("tigre");

let user = {
    id: 1,
    nombre: "Ramon Pascual",
    web: "victorroblesweb.es"
};

let supercalifrajilistico = Symbol('id');
//user.id = 7; para mosrar
user[supercalifrajilistico] = 7;

//acceder a id dentro de objeto user
console.log(user.id, user[supercalifrajilistico]);

//console.log(user.id, user[id])
//console.log(animal == animal2)



/*
console.log(typeof nombre,
            typeof numero,
            typeof decimal,
            typeof mayor_edad,    
            typeof menor_edad,    
            typeof paises,
            typeof(paises[1]),
            typeof vacio,   
            typeof no_definido   
)
*/