import { Vehiculo} from './vehiculo/vehiculo'
import { menu, menu2 } from './vistas/menuPral'
import { leerTeclado } from './vistas/entradaTeclado'

const main = async() => {
    let vehiculo: Array<Vehiculo> = new Array()
    let n: number 
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Usted está creando un nuevo vehiculo')
                let matricula:string , consumo:number
                let velocidad:number
                matricula=await leerTeclado('Introduzca la matrícula del coche (XXXXNNN)')
                consumo = parseInt( await leerTeclado('Introduzca el consumo del vehículo(Litros cada 100KM)'))
                velocidad = parseInt( await leerTeclado('Introduce velocidad') )
                let v1=new Vehiculo(matricula, consumo, velocidad)
                let existe = false
                vehiculo.forEach(vehiculo => {
                    if (vehiculo.Matricula==vehiculo.Matricula){
                        existe=true
                    }
                });
                if (existe){
                    console.log('Este coche ya existe')
                } else{
                    vehiculo.push(v1)
                }
                break
            case 2:
                if (vehiculo.length==0){
                    console.log('No existen vehiculo creados')
                } else {
                    console.log('Usted está imprimiendo los vehiculos')
                    vehiculo.forEach(vehiculo => {
                        console.log(`${vehiculo.imprimirVehiculo()}`)
                    });
                }
                break
            case 3:
                if (vehiculo.length==0){
                    console.log('No existen vehiculos creados')
                } else {
                    let m1:string
                    console.log('Elija usted la matrícula de un vehiculo')
                    vehiculo.forEach(vehiculo => {
                        console.log(`${vehiculo.imprimirVehiculo()}`)
                    });
                    m1=await leerTeclado('Introduzca la matrícula del vehiculo')
                    let index:number=-1
                    vehiculo.forEach(Vehiculo => {
                        if(Vehiculo.Matricula()==m1){
                           index=vehiculo.indexOf(Vehiculo)
                        }else{
                            console.log('Este vehiculo no existe')
                        }
                    });
                    if(index!=-1){
                        let n2:number
                        do {
                            n2 = await menu2()
                            switch(n2){
                                case 1:
                                    console.log('Viendo el vehiculo elegido')
                                    console.log(vehiculo[index].imprimirVehiculo())
                                    break
                                case 2:
                                    if(vehiculo[index].Arrancado){
                                        console.log('Apagando vehiculo')
                                        vehiculo[index].botonArrancado()
                                    }else{
                                        console.log('Encendiendo vehiculo')
                                        vehiculo[index].botonArrancado()
                                    }
                                    break
                                case 3:
                                    let v:number
                                    v=parseInt(await leerTeclado("Introduzca la nueva velocidad del vehículo"))
                                    try {
                                        vehiculo[index].Velocidad=v 
                                    } catch (error) {
                                        console.log(error)
                                    }
                                    break
                                case 4:
                                    let t:number
                                    t=parseInt(await leerTeclado("Introduzca el tiempo en horas que lleva el vehículo a la velocidad actual"))
                                    console.log(`${vehiculo[index].consumido(t)} litros`)
                                    break
                                case 0:
                                    console.log('\n--VOLVIENDO A LA LISTA DE VEHICULOS--')
                                    break
                                default:
                                    console.log("Opción incorrecta")
                                    break
                            }
                        } while (n2!=0);
                    }
                }
                break
            case 0:
                console.log('\n--ADIÓS--')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    } while (n!=0);
}

main()