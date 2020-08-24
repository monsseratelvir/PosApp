import React from "react";
import Product from './Product'
import Swal from 'sweetalert2'

const TablaVenta = ({ products, setProducts }) => {

  const alert = () => {
    Swal.fire({
      title: '¿Acceder a pago?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'confirmar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Pago realizado con exito',
          'success'
        )

        setProducts([])
      }
    })
  }
  
  return (
    <div className="">
      <div className="card">
        <div className="card-body">         
          <div className="row justify-content-end">
              <button type='button' className='btn btn-outline-success mr-3 mb-2'  onClick={() => alert()}>Pagar</button>
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