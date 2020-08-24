import React from 'react';

const Botones = ({ producto, newProduct }) => {

  const { id, nombre, precio } = producto

  const seleccionProduct = () => {
    const prod = {
      id,
      cantidad: 1,
      nombre,
      precio
    }

    newProduct(prod)
  }

  return (
    <button className='btn btn-outline-primary mr-2 mt-1' onClick={() => seleccionProduct()} >
      {nombre}
    </button>
  );
};

export default Botones;