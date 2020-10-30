import {Schema, model } from 'mongoose'
export class Vehiculo {
    private _matricula : string
    private _consumo : number 
    private _arrancado : boolean
    private _velocidad : number

    constructor (matricula:string, consumo:number, velocidad:number){
        this._matricula = matricula
        this._consumo = consumo
        this._arrancado = false 
        this._velocidad = velocidad
    }

    Matricula(){
        return this._matricula
    }

    get Consumo(){
        return this._consumo
    }

    get Arrancado(){
        return this._arrancado
    }

    botonArrancado(){
        if(this._arrancado==false){
            this._arrancado=true
        }else{
            this._arrancado=false
            this._velocidad= this._velocidad
        }
    }

    get Velocidad(){
        return this._velocidad
    }

    set Velocidad(n:number){
        if(this._arrancado==false){
            throw 'ERROR, no puedes cambiar la velocidad a un coche que no está arrancado'
        } else {
            this._velocidad=n
        }
    }

    consumido(t:number){
        return (this._velocidad/t)*(this._consumo/100)
    }

    imprimirVehiculo(){
        return `El vehiculo con matricula ${this._matricula} va a ${this._velocidad} km/h y consume ${this._consumo} L cada 100 km`
    }
    
}

// Definimos el Schema
const vehiculoSchema = new Schema({
    _matricula : String,
    _arrancado : Boolean,
    _consumo : Number ,
    _velocidad : Number,
})

// La colección de la BD: vehiculos (Plural siempre)
export const Vehiculos = model ('vehiculos', vehiculoSchema)