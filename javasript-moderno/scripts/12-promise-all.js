// array de productos

let productos = [
  {
    nombre: "Ordenador Gaming",
    marca: "Asus",
    precio: 1200,
  },
  {
    nombre: "Tablet",
    marca: "Samsung",
    precio: 3200,
  },
  {
    nombre: "Camara Reflex",
    marca: "Canon",
    precio: 5200,
  },
];

function conseguirProductos() {
  //creamos las promesas
  return new Promise((resolve, reject) => {
    console.log("Cargando productos...");

    setTimeout(() => {
      resolve(productos);
      //reject(Error("A ocurrido un error!!"))
    }, 3000); //retardo de medio segundo
  });
}
function conseguirNombre() {
  //creamos las promesas
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Ramon Pascual Grau WEB");
    }, 3000); //retardo de medio segundo
  });
}
        

async function getMisProductos() {
  try {
    console.log("cargando informacion...");
    let informacion = await Promise.all([
      conseguirProductos(),
      conseguirNombre()
    ]); 

    // let mis_productos = await conseguirProductos();
    // let mi_nombre = await conseguirNombre();
   

    console.log(informacion[0], informacion[1]);
  } catch (error) {
      console.log(error);
    console.log(error.message);
  }
  console.log("fuera del dry");
}
getMisProductos();
    
  


