import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Perimetro rectangulo')
    console.log('2.- Area triangulo')
    console.log('3.- Perimetro circulo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}