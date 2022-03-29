class Coche {
  //si no le indico nada es una propiedad publica : se pueden aceder desde dentro de cualquier metodo de la clase
  //   npuertas = 4;
  #npuertas = 4; //privada , solo se puede acceder desde dentro de la propia clase,no desde clases hereden esta clase y no desde fuera de la clase
  _nplazas = 5; //protegida desde dentro de la clase o desde clases hereden esta clase

  //Metodo que se ejecuta primero
  constructor(marca, modelo, color, velocidad, year) {
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
  set guardarMarca(marca) {
    this.marca = marca;
  }
  get dedolverMarca() {
    return this.marca;
  }
  get numeroPuertas() {
    return this.#npuertas;
  }
  get numeroPlazas() {
    return this._nplazas;
  }

  //metodo estatico
  //para utilidades utiles y rapidas
  static saludar(nombre) {
    return "Hola " + nombre;
  }
}

//crear objeto
let mi_coche = new Coche("Auidi", "C4", 100);

//crear objeto
// let mi_coche2 = new Coche("Auidi", "C4", 100);
// console.log(mi_coche2.marca, mi_coche2.modelo, mi_coche2.velocidad + "km");

//aqui tambien funciona  si pongo frase conslole.log de abjo no veo no bie asi si
// mi_coche.subirVelocidad();
// mi_coche.subirVelocidad();
// mi_coche.subirVelocidad();
// mi_coche.subirVelocidad();
// mi_coche.subirVelocidad();

//netodo normal
//cambio marca a coche
// mi_coche.setMarca("jeep");

//metodo set sin parentesis no es una funcion
// mi_coche.guardarMarca = "Toyota";
// console.log((mi_coche.devolverMarca = "Toyota"));

// console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad + "km");

//metodo estatico
// console.log(Coche.saludar("Ramonet"));

//console.log visibilidad de propiedades
// console.log(mi_coche.npuertas);

//metodo propiedad privada poder acceder
// console.log(mi_coche.numeroPuertas);

//ver elnumero de plazas : propiedad protegida con guionbajo _
// console.log(mi_coche.numeroPlazas);

//herencia
class quad extends Coche {
  constructor(marca, modelo, color, velocidad, year,cilindrada) {
    super(marca, modelo, color, velocidad, year);
    this.cilindros = cilindrada;
  }
}
let mi_quad = new quad("Ferrary", "yeaaa","amarillo", 200, 2030, 70, 6);
console.log(mi_quad);
console.log(mi_quad.marca);

mi_quad.subirVelocidad();
mi_quad.subirVelocidad();
mi_quad.subirVelocidad();
mi_quad.subirVelocidad();

console.log(mi_quad);