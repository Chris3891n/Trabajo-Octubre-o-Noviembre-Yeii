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