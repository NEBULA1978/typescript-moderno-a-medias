//peticion ayax moderna
fetch(
  'https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     
     .then((items) => {
        // console.log(datos[82].title);
         console.log(items);
         mostrar(items);
  })
  .catch(error => {
      console.log("La peticion ajax a fallado");
  })
  ;
  

  //DOM
function mostrar(elementos){
    //seleccionar div contenedor de html y escribir en pagina
    let contenedor = document.querySelector("#contenedor");

    //metemos informacion por cada iteracion voy a meter informacion en la pagina
    elementos.forEach(elemento => {
        let muestrame = `
            <article>
                <h2>${elemento.title}</h2>
                <p>${elemento.body}</p>
            </article>
            <hr/>
        `;
        contenedor.innerHTML += muestrame
    });

    return elementos;

}