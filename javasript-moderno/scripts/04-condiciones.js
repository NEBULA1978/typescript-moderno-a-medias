// array
let persona = ["Ramon Pascual", 70];

//si usuario persona es mayor de edad que se muestre y sino otra

//codicion clasica
if(persona[1] >= 18){//se cambia edad de aqui
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");

}

//operador ternario condicionales modernas
let edad = (persona[1] >= 18) ? "Es mayor de edad" : "Es menor de edad";

console.log(edad)

//si  persona da tru  existe o false no existe
let existe = persona ? "existe" : "no existe";
console.log(existe);

//diferencia entre == y === y != y !==
let edad1 = 80;
let edad2 = "80";

if(edad1 !== edad2){
    console.log("Edades distintas");
}else{
    console.log("Edades iguales");
}
