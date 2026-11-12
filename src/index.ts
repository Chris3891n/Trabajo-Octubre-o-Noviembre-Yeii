console.log('hola')

class Cambios{

    cambios:number
    constructor(cambios:number){
        this.cambios = cambios
    }

    Ncambios(){
        console.log('El numero de cambios realizados es de: ' + this.cambios)
    }

}


class Errores{
    NErrores:number
    constructor(NErrores:number){
        this.NErrores = NErrores
    }

    errores(){
        console.log('Numero de Errores: '+ this.NErrores)
    }

}


const CambiosExitosos = new Cambios(2)
CambiosExitosos.Ncambios()

const NumeradorDeErrores = new Errores(10)
NumeradorDeErrores.errores()


function RegistrarUsuario(nombre:string, apellido1:string, apellido2:string): void{
    if (nombre.trim() === "" || apellido1.trim() === "" || apellido2.trim() === "") {
        console.log("Todos los campos son obligatorios");
        return;
    }

    if (nombre.trim().length < 3) {
        console.log("El nombre debe tener al menos 3 caracteres");
        return;
    }

    console.log("Usuario registrado correctamente");
    console.log("Nombre completo: " + nombre.trim() + " " + apellido1.trim() + " " + apellido2.trim());
}

// USUARIO 1
RegistrarUsuario("Natali", "Guzmán", "Cáceres");

// USUARIO 2
RegistrarUsuario("Christopher", "Núñez", "Muñoz");

