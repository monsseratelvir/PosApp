import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { FirebaseContext } from "../firebase/Context";
import Producto from "./Producto";

const Inventario = () => {
  const { productos } = useContext(FirebaseContext)

  return (
    <div className="row justify-content-center justify-items-center">
      <div className="card mt-4 rounded col-md-8">
        <div className="card-body">          
            <h1 className="text-center">Inventario</h1>
            <div className="row justify-content-end">
              <Link to={'/nuevo-producto'} className='btn btn-outline-success mr-3'>Agregar Producto</Link>
            </div>
            <table className="table mt-3">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Codigo</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {/*iterar= recorrer arreglo */}              
                {productos.map(producto => (
                  <Producto key={producto.id} producto={producto}  />
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};
export default Inventario;
