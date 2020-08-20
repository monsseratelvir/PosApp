import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useContext } from "react";
import { FirebaseContext } from "../firebase/Context";


const NuevoProducto = (props) => {
  const {firebase} = useContext(FirebaseContext)

  let history = useHistory()
 //paso1: crear el estado usestate 
  const [newProduct, setNewProduct] = useState({
    nombre: '', codigo:'', precio:'', cantidad:''
  })
  //paso2: Extraer valores del usestate
  const { nombre, codigo, precio, cantidad } = newProduct

  //Funcion para capturar los valores del form
  const handleOnchange = e => {
    setNewProduct({...newProduct, [e.target.name]: e.target.value})
  }
//cada vez que se haga un form

  const handleSubmit = e => {
    e.preventDefault()

    if(nombre.trim() === '' || codigo.trim=== ''||precio.trim() === ''||cantidad.trim() === ''){
      return
    }

    firebase.db.collection('productos').add(newProduct)

    history.push('/inventario')
  }

  return (
    <div className="row justify-content-center justify-items-center">
      <div className="card mt-4 rounded col-md-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <h1 className='text-center'>Nuevo Producto</h1>
            <div className="form-group">
              <label>Nombre</label>
              <input className='form-control' type="text" name='nombre' value={nombre} onChange={handleOnchange} />
            </div>
            <div className="form-group">
              <label>Codigo</label>
              <input className='form-control' type="text" name='codigo' value={codigo} onChange={handleOnchange}/>
            </div>
            <div className="form-group">
              <label>Precio</label>
              <input className='form-control' type="text" name='precio'value={precio} onChange={handleOnchange}/>
            </div>
            <div className="form-group">
              <label>Cantidad</label>
              <input className='form-control' type="text" name='cantidad'value={cantidad} onChange={handleOnchange}/>
            </div>
            <button type='submit' className='btn btn-primary btn-block rounded'>Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NuevoProducto;
