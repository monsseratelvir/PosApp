import React from "react";
import Product from './Product'
import { Link } from 'react-router-dom'

const TablaVenta = ({ products }) => {
  console.log(products)
  return (
    <div className="">
      <div className="card">
        <div className="card-body">         
          <div className="row justify-content-end">
              <Link to={'/nueva-venta'} className='btn btn-outline-success mr-3 mb-2'>Pagar</Link>
            </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>                
              </tr>
            </thead>
            <tbody>
              {products.map(prod => (
                <Product key={prod.id} prod={prod} />
              ))}
            </tbody>            
          </table>         
        </div>       
      </div>
    </div>
  );
};

export default TablaVenta;