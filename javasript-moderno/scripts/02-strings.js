//para que no me salga error NULL
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // strings clasicos
    let nombre = "Ramon";
    let apellidos = "Pascual";
    let profesion = "Desarrolador web";
    let nya = nombre + " " + apellidos + "\n" + profesion; //barra n en consola br en html

    // templates Strings
    /*
    let plantilla = `
    hola 
    soy 
    bartolito
    
    `;*/

    // templates Strings
    let plantilla = `
${nombre} ${apellidos}
${profesion}    
`;

    console.log(nya);
    console.log(plantilla);

    // funcion para agregar plantillas diferentes
    function ficha(nombre, apellidos, profesion) {
      let fichaTecnica = `
    <div class="ficha">
    <h2>${nombre} ${apellidos}</h2>
    <h3>${profesion}</h3>
    <p2>Forma parte del equipo de victorrobles.web.es</p2>
    </div>
    `;
      return fichaTecnica;
    }

    let cajaFichas = document.createElement("section");

    cajaFichas.innerHTML = ficha("Ramon", "Pascual", "Desarrolador web");
    cajaFichas.innerHTML += ficha("Pepe", "Pascual", "Desarrolador web");
    cajaFichas.innerHTML += ficha("Bartolo", "Pascual", "Desarrolador web");

    //document.body.appendChild(cajaFichas);
    document.body.querySelector("#contenedor").appendChild(cajaFichas);
  },false);
