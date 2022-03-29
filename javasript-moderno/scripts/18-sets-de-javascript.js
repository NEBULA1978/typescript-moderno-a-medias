//crear set
let gadgets = new Set(["movil", "tablet", "portatil"]);

//agregar elementos
 gadgets.add(12);
gadgets.add(["hola","hola"]);
gadgets.add("pc sobremesa");
gadgets.add("tv");
gadgets.add("kromencast");
console.log(gadgets);

//sacar el tamaño del set
console.log(gadgets.size);

//eliminar elementos
gadgets.delete("tv");
gadgets.delete("kromencast");

//comprobar existencia
console.log(gadgets.has("tv"), gadgets.has("kromencast"));

//recorrer el set
// for(let item of gadgets){
//     console.log(item);
    
// }

//con foreach lo mismo que arriba con for of pero mas corto
gadgets.forEach(item => console.log(item))

gadgets.clear();
console.log(gadgets)