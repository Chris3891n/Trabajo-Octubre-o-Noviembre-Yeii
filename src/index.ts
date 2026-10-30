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

const CambiosExitosos = new Cambios(2)
CambiosExitosos.Ncambios()