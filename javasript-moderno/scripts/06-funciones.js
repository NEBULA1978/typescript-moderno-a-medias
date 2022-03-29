//parametros por defecto
function saludo(persona = "victor robles", year = 2022){
/*
    let year = 2022;
    let resta = 80 -5;
*/
    console.log( "Hola te mando un saludo "+persona+" estamos a "+year);
}

saludo("pepe", 2050);

/*console.log(saludo("Antonio"))
console.log(saludo("victor"))
console.log(saludo("Pepe"))
console.log(saludo("Luis"))
console.log(saludo("Juan"))
*/

//funciones flecha
let saludo2 = function(nombre){
    return "Hola,te mando un saludo "+nombre;
}

console.log(saludo2("Ramon"))

let saludo3 = (nombre) => "Hola,te mando un saludo " + nombre;
console.log(saludo3("Pepe"))

let saludo4 = (nombre, pais) => "Hola,te mando un saludo " + nombre+" de "+pais;
console.log(saludo4("Pepe", "España"))

let saludo5 = (nombre, pais) => {
    let continente = "Europa";
    
    if(pais !== "España"){
        continente = "Asia";
    }
    
    return "Hola,te mando un saludo " + nombre+" de "+pais+" y el continente es "+continente;
};

console.log(saludo5("Jose Luis", "China"))//sino pongo españa sale asia

//resumen
function multiplicacion(n, n2){
    console.log(n*n2);
}

//funcion de flecha quitamos function por => es lo mismo anterior
let multiplicacion1 = (n, n2) => console.log(n * n2);

multiplicacion1(2, 3);

//JSON
let tienda = {
  nombre: "GAME",
  videojuegos: ["GTA", "WWE", "FIA"],
  mostrar: function () {
    //console.log(tienda.nombre)
    console.log(this.nombre);
  },
  /*
    mostrar2(){
        //console.log(this.nombre)
        this.videojuegos.forEach(juego => console.log(juego));
        */
  mostrar2() {
    //console.log(this.nombre)
    this.videojuegos.forEach((juego) => {
        // si estoy recorriendo gta decir :abajo
        if(juego === "GTA"){
            console.log("El mejor juego de la historia:")
        }
        console.log(juego);
    });
  },
  mostrar3: () => {
    //console.log(this.nombre)//dentro operador flecha no se puede utilizar this
    console.log(tienda.nombre); //dentro operador flecha no se puede utilizar this
  },
};

tienda.mostrar2();