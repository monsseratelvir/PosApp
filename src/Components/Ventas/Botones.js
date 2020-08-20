import React from 'react';

const Botones = ({ producto, newProduct }) => {

  const { id, nombre, cantidad, precio } = producto

  const seleccionProduct = () => {
    const prod = {
      id,
      nombre, 
      cantidad,
      precio
    }

    newProduct(prod)
  }

  return (
    <button className='btn btn-outline-primary mr-2' onClick={() => seleccionProduct()} >
      {nombre}
    </button>
  );
};

export default Botones;