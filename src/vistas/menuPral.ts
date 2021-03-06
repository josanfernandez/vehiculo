import { leerTeclado } from '../vistas/entradaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- CREAR vehiculo')
    console.log('2.- VER vehiculo')
    console.log('3.- ELEGIR vehiculo')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}

export const menu2 = async () => {
    let n: number
    console.log('\n')
    console.log('1.- VER vehiculo')
    console.log('2.- ENCENDER/APAGAR vehiculo')
    console.log('3.- CAMBIAR VELOCIDAD vehiculo')
    console.log('4.- CALCULAR CONSUMO vehiculo')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}
