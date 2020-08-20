import React, { useContext } from "react";
import { Link } from "react-router-dom";

const NuevaVenta = () => {
  
  return (    
    <div className="row justify-content-center justify-items-center">
      <div className="card mt-4 rounded col-md-8">
        <div className="card-body">
        
          <form>          
            <h1 className="text-center">Pago</h1>
            <div className="form-group">
              <label>Total</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label>Efectivo</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="row justify-content-end">
              <Link to={'/Ventas'} className='btn btn-outline-success mr-3'>Pagar</Link>
            </div>                  
          </form>
        </div>             
            </div>
          </div>     
);

};

export default NuevaVenta;
