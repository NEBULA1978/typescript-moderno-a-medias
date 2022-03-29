// seleccionar elementos con Id , forma antigua
// let contenedor = document.getElementById("contenedor");

//seleccionar elementos con una clase
// seleccionar elementos con Id , forma moderna
let contenedores = document.querySelectorAll("/*#contenedor*/.container")

//recorriendo lista del dom
// console.log(contenedor)
contenedores.forEach((elemento, indice) => {
    elemento.innerText = `Hola soy un texto ${indice} desde JS`;
    // contenedor.style.border = "1px solid black";
    elemento.className = "ficha";

    if (indice === 2) {
        elemento.style.backgroundColor = "orange";
    }

});