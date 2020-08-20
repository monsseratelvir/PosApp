import React from "react";

const Producto = ({ producto }) => {
  const {id, nombre, codigo, precio, cantidad} = producto

  return (     
    <tr>
      <td>{id}</td>      
     <td>{nombre}</td>
      <td>{codigo}</td>
      <td>{precio}</td>
      <td>{cantidad}</td>
    </tr>
  );
};

export default Producto;
