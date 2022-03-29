/*let frutas = ["manzana", "pera", "naranja", "sandia"];

//clasico
//let manzana = frutas[0];
//let pera = frutas[1];

//Desetructurar array moderna
//let [manzana,pera,sandia] = frutas; tienen estar en orden o da error


let [manzana,pera,naranja,sandia] = frutas;
console.log(manzana)

//console.log(frutas)

//Desetructurar objetos: pasasr todos los datos objeto a variables
let persona = {
    nombre: "Ramon",
    edad: 45,
    altura: 190,
    pais: "España"
};

//aqui da igual el orden porque tenemos una clave alfanumerica
let {nombre, edad, altura, pais} = persona;
*/
//Desetructurar string: cada usuario tiene guardada esta informacion
let usuario = "Ramon Pascual WEB 88888888G 09/08/1978 Alicante";
let [nombre, apellido1, apellido2, dni, fecha, ciudad] = usuario.split(" ");

//crear varia variables
let lenguaje = "JS",
framework = "Angular",
editor = "VSC";


//utilidad parametros funciones
function mostrarUsuari({nombre, apellido= "Desconocido", ciudad = "Barcelona"}){
    console.log(nombre +" "+ apellido+" "+ ciudad);
}

mostrarUsuari({nombre: "Ramon", ciudad: "Alicante"});