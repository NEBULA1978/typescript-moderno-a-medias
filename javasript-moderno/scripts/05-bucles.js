let nombres = [

    "victor",
    "paco",
    "pepe",
    "juan"


];

//bucle clasico
/*
for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}
*/

// for of recorre el contenido de mis indices  :  accedo al contenido of
for(let nombre of nombres){
    console.log(nombre);
}

//for in :me saca el indice : accedo al indice con in y al contenido
//for in recorrer JSON para sacar las claves
for(let indice in nombres){
    console.log(indice, nombres[indice]);
}

//foreach
nombres.forEach(function(nombre_actual, indice, arreglo){
    console.log(indice, nombre_actual, arreglo)
});

//funciones flecha de anterior foreach
nombres.forEach((nombre_actual, indice) => {
    console.log(indice, nombre_actual);
    
});


//funciones flecha de anterior foreach sin indice
nombres.forEach(nombre_actual => console.log(nombre_actual));



//recorrer string
let sitioweb = "victorroblesweb.es"
for (let letra of sitioweb) {
    console.log(letra);
}

//iterables recorrer array de nombres
let mi_iterable = nombres[Symbol.iterator]();

//console.log(typeof mi_iterable, mi_iterable)
/*
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
*/

//JSON
let fruta = {
    nombre: "Manzana",
    color: "Verde",
    temporada:"Invierno"
};


//creo funcion anonima para poder itera con  for of de abajo
fruta[Symbol.iterator] = function(){
    let indice = 0;
    let valores = Object.values(this);

    return {
        next(){
            
            
            if(indice >= valores.length){
                return{
                    done: true,
                    value: undefined
                };
            }

            return {
                done: false,
                value: valores[indice++]
                //value: indice++ mismo arriba
            }
        }
    };
}
for(let propiedad of fruta){
    console.log(propiedad);
}

for(let propiedad in fruta){
    console.log(propiedad, fruta[propiedad]);
}

