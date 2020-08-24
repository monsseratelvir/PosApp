import React, { useState, useContext } from 'react';
import TablaVenta from './TablaVenta';
import Botones from './Botones';
import { FirebaseContext } from '../../firebase/Context';
import TotalPagar from './TotalPagar';

const Ventas = () => {
  const {productos} = useContext(FirebaseContext)
 
  const [products, setProducts] = useState([])//Productos que se van agregando a tabla venta
  

  const newProduct = producto => {
   
    setProducts([...products, producto])
  }


  

  return (
    <section className='card'>
      <div className="row card-body">
        <div className="col-5 mt-2">
          <TablaVenta products={products} setProducts={setProducts} />
          <TotalPagar products={products} />
        </div>
        <div className="col-7 mt-2">
          {productos.map(producto => (
            <Botones key={producto.id} producto={producto} newProduct={newProduct} />
          ))}
        </div>
        <div className='card'>
          <div className='row car-body'>
            <div className='col-5 mt-2'>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventas;
