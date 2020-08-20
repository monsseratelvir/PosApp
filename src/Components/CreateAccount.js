import React, { useState } from 'react';

const CreateAccount = () => {
  const [newAccount, setNewAccount] = useState({ nombre: '', email: '', password: '' })
  const { nombre, email, password } = newAccount

  const handleChange = e => {
    setNewAccount({...newAccount, [e.target.name]: e.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()

    console.log(newAccount)
  }

  return (
    <div className='row justify-content-center'>
      <div className="card mt-5 p-4 col-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input className='form-control' type="text" name='nombre' value={nombre} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className='form-control' type="email" name='email' value={email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className='form-control' type="password" name='password' value={password} onChange={handleChange} />
          </div>
          <button type='submit' className='btn btn-primary rounded'>Crear cuenta</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;