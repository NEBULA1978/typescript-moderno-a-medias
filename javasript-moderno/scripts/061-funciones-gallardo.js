// funciones sin parametros
function uno(){
    var saludo = document.write("Hola a todos<br>");
    return saludo;
};


//funcion con parametros

function dos(a, b, c){
    //declarando las variables para ser luego reutilizadas
   // var a, b, c;

    var datos = document.write(
      "Mi nombre es: " +
        a +
        "<br> Mi apellido es: " +
        b +
        "<br>Mi edad es: " +
        c
    );
    return datos;
}
//uno();
//dos("Ramon", "Pascual", 43);

function tres(nombre=""){
    var nombreCOmpleto = nombre;
    return document.write(nombreCOmpleto);
};
//dos();siini pongo parametros me sale undefined donde los parametros
//tres("Ramon Pascual");


//evaluacion de los parametros
//quiero que si no ha introducido datos me diga ingresa los datos y si los 
// introduce me diga los datos introducidos por paginaweb
function cuatro(nombre, apellido){
    if(nombre !=null && apellido !=null){
        // si existe o si no esta vacia? (nombre !=null)
        respuesta = document.write(nombre +" ", apellido)//concadeno para espacio
    }else{
        respuesta = document.write("No puso sus datos completos");
     };

     return respuesta;
}

//cuatro("Ramon", "Pascual");

//funcioones con rest ... metemos los datos que queramos

function cinco(... meses){
    for(let uno of meses){

        document.write(uno + ":" + "<br>");// con return me devuelve 1valor unico sin return todos los valores
    }
}
//cinco("Enero", "Febrero", "Marzo", "Abril");


//funcion 6: spread enviar varios datos a nuestra funcion 

function seis(nombre, precio, peso){
    return "Nombre: " + nombre + "<br>Precio: " + precio + "<br>Peso: " + peso;

}

//var juguete = ['Soldado', 25, 2];// con spread enviamos  datos array

//document.write ( seis(...juguete))


//Funciones Anonimas
var siete = function(){
    respuesta = "Hola a todos";
    return respuesta;
};

//document.write( siete() );
//==========================================================================
//calbacs 
/*
var a = function(nombre, uno){var e=nombre; uno(e) };
var b = function(i){document.write(i); };

a("Ramon", b);// paso el nombre y una funcion
*/
//======================================
/*
function uno(nombre){
    return nombre;
}
Es lo mismo que lo de abajo 
*/
var uno = nombre => nombre;

var dos = (nombre, apellido)=>nombre + apellido;

document.write(uno("Ramon Pascual<br>"));
document.write(dos("Pepe", " Pascual"));