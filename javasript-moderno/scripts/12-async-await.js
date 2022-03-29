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

//  ejer 1
//  async function getMisProductos(){
//     let mis_productos = await conseguirProductos();
//     console.log(mis_productos);
// }
// getMisProductos();



// ariiba ejer 2



async function getMisProductos(){
  try{
    let mis_productos = await conseguirProductos();
    console.log(mis_productos);

  }catch(error){
    console.log(error.message);
  }
  console.log("fuera del dry")
}
getMisProductos();