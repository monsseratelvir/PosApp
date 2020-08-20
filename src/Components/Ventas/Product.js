import React from 'react';

const Product = ({ prod }) => {
  const { nombre, cantidad, precio } = prod

  return (
    <tr>
      <td>{nombre}</td>
      <td>{cantidad}</td>
      <td>{precio}</td>
    </tr>
  );
};

export default Product;