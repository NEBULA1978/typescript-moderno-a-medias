class Coche {
  //Metodo que se ejecuta primero
  constructor(
    marca = "Mercedez",
    modelo = "Clase A",
    color = "Rojo",
    velocidad = 100,
    year = 2020
  ) {
    //propiedades o atributos
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.velocidad = velocidad;
    this.year = year;
  }

  // METODOS  / acciones o las funcionalidades del objeto
  subirVelocidad() {
    this.velocidad += 1; //sumar 1 al contenido
  }

  bajarVelocidad() {
    this.velocidad -= 1;
  }

  //metodos set y get(setters y getters)
  //   setMarca(marca) {
  //     this.marca = marca;
  //   }
  //   getMarca() {
  //     return this.marca;
  //   }
}

//crear objeto
// let mi_coche2 = new Coche("Auidi", "C4", 100);
// console.log(mi_coche2.marca, mi_coche2.modelo, mi_coche2.velocidad + "km");

//crear objeto
let mi_coche = new Coche("Auidi", "C4", 100);

//aqui tambien funciona
// mi_coche.subirVelocidad();
// mi_coche.subirVelocidad();
// mi_coche.subirVelocidad();
// mi_coche.subirVelocidad();
// mi_coche.subirVelocidad();

console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad + "km");
mi_coche.subirVelocidad();
console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad + "km");
mi_coche.bajarVelocidad();
console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad + "km");
mi_coche.bajarVelocidad();
console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad + "km");
mi_coche.bajarVelocidad();
console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad + "km");
mi_coche.subirVelocidad();
