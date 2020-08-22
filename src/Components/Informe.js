import React from 'react'
import moment from 'moment'


const Informe = () => {
      const fecha = Date.now()
      return (
            <h3>{moment(fecha).format("MMM Do YY")}</h3>
      )
}

export default Informe

//leer del arreglo la cantidad y precio de cada producto.
//el impuesto es multiplicar el subtotal * 15% (0.15) o multiplicarlo directamente con el total ==> total * 1.15 
//

//export const total = productos => {
  // return productos.cantidad * productos.precio
//}

//import { total } from 'ruta del archivo de funciones'

//const totalPagar = totalPagar + total(productos)