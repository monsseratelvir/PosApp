import React, { useState } from 'react'
import BgImage from '../css/algo.module.css'

const Form = () => {
     const [nombre, setNombre] = useState({ name: '', edad: '' })
     const { name, edad } = nombre

     const handleChange = e => {
          setNombre({ ...nombre, [e.target.name]: e.target.value })
     }
     return (
          <section className={BgImage.background}>
               <div className='row justify-content-center justify-items-center'>
               <div className='card mt-4 rounded col-md-4'>
                    <div className='card-body'>
                         <form>
                              <h1 className='text-center'>UPayWeb</h1>
                              <div className="form-group">
                                   <label>correo: </label>
                                   <input className='form-control' type="text" name='name' value={name} onChange={handleChange} />
                              </div>
                              <div className="form-group">
                                   <label>contraseña: </label>
                                   <input className='form-control' type="text" name='edad' value={edad} onChange={handleChange} />
                              </div>

                              <button type='submit' className='btn btn-success'>Submit</button>
                         </form>
                    </div>
               </div>
               </div>
          </section>
     )
}

export default Form