// EcmaScript 2021 / ES12/ ES.NEXT

// variables: let , var , const

//var: ambito global o funcional
var nombre = "Ramon Pascual WEB";

function mostrarNombre(){
    nombre = 'Pepito';
    var apellidos = 'Pascual';
    console.log('Dentro:', nombre);
    console.log('Dentro:', apellidos);
}
/*
mostrarNombre();
console.log('Fuera:', nombre);
console.log('Fuera:', apellidos);
*/

//LET:ambito de bloque
let pais = 'España';

function mostrarPais(){
    console.log(pais);
    
}

mostrarPais();

if(pais == 'España'){
    let continente = 'Europa';
    console.log(continente);
}

//No accesible desde fuera del bloque con var si me deja eje
//console.log('fuera', continente);

for(var contador = 0; contador <= 5; contador++){
    console.log(contador);
}

console.log("contador:", contador);

// CONST: asignamos un valor constante no puede cambiar

let edad = 18;

console.log(edad);

edad = 12;

console.log(edad);

const ciudad = 'Madrid';

