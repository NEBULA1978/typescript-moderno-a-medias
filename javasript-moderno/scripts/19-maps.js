// objeto json
const antiguos_gadgets = {
    seis: "radiocasete",
    siete: "telefono sobremesa",
    ocho: "compact disc"
};


const gadgets = new Map(Object.entries(antiguos_gadgets));
//weakMap y WeakSet solo almacenan objetos javascript
gadgets.set(1, "PC");
gadgets.set(2, "TV");
gadgets.set(3, "TABLET");
gadgets.set("cuatro", "Movil");
gadgets.set("cinco", "Laptop");

console.log(gadgets);
console.log(gadgets.get(3));
console.log(gadgets.get("cinco"));

// me evalua las claves no los valores
console.log(gadgets.has(2));