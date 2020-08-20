import React from "react";
import Product from './Product'

const TablaVenta = ({ products }) => {
  console.log(products)

  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Cantidad</th>                
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