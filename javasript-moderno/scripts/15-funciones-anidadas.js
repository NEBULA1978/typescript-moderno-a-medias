let nombre = "Ramon";

function mostrarNombre(){

    let apellidos = "Pascual";
    function mostrarApellidos(){
        
        let profesion = "Desarrollador web";
        function mostrarProfesion(){
            return nombre + " " + apellidos + " " +profesion;
    }
        
        return mostrarProfesion;
        }

    return mostrarApellidos;
}

console.log(mostrarNombre()()());