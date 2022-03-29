window.addEventListener("DOMContentLoaded", (event) => {
  //console.log(event)
  let caja = document.querySelector("#contenedor");
  caja.innerHTML = "Cargando....";

  //peticion ayax moderna
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())

    .then((items) => {
      // console.log(datos[82].title);
      console.log(items);

      //mensaje cargando
      caja.innerHTML ="";
      mostrar(caja, items);
    })
    .catch((error) => {
      console.log("La peticion ajax a fallado");
    });

  //DOM
  function mostrar(caja, elementos) {
    //seleccionar div contenedor de html y escribir en pagina

    //metemos informacion por cada iteracion voy a meter informacion en la pagina
    elementos.forEach((elemento) => {
      let muestrame = `
            <article>
                <h2>${elemento.title}</h2>
                <p>${elemento.body}</p>
            </article>
            <hr/>
        `;
      contenedor.innerHTML += muestrame;
    });

    return elementos;
  }
});
