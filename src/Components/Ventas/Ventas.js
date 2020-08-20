import React, { useState, useContext } from 'react';
import TablaVenta from './TablaVenta';
import Botones from './Botones';
import { FirebaseContext } from '../../firebase/Context';

const Ventas = () => {
  const {productos} = useContext(FirebaseContext)
  
  const [products, setProducts] = useState([])
  
  const newProduct = producto => {
    setProducts([...products, producto])
  }

  return (
    <section className='card'>
      <div className="row card-body">
        <div className="col-5 mt-2">
          <TablaVenta products={products} />
        </div>
        <div className="col-7 mt-2">
          {productos.map(producto => (
            <Botones key={producto.id} producto={producto} newProduct={newProduct} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventas;
