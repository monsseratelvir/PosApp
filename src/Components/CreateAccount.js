import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../firebase/Context";

const CreateAccount = () => {
  let history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [newAccount, setNewAccount] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const { nombre, email, password } = newAccount;

  const handleChange = (e) => {
    setNewAccount({ ...newAccount, [e.target.name]: e.target.value });
  };

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      history.push("/ventas");
    } catch (error) {
      console.error("Hubo un error al crear el usuario", error.message);
      setError(error.message);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim() === 0 || email.trim() === 0) {
      return;
    }

    if (password.length < 6) {
      setPwError(true);
    }

    crearCuenta();
  };

  return (
    <div className="row justify-content-center">
      {error && <h2 className="text-center text-danger">{error}</h2>}
      {pwError && (
        <h2 className="text-center text-danger">
          La contraseña debe tener más de 6 carácteres
        </h2>
      )}
      <div className="card mt-5 p-4 col-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={nombre}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary rounded">
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
