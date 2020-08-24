import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import BgImage from "../css/algo.module.css";
import { FirebaseContext } from "../firebase/Context";

const Form = () => {
  let history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [nombre, setNombre] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const { email, password } = nombre;

  const handleChange = (e) => {
    setNombre({ ...nombre, [e.target.name]: e.target.value });
  };

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      history.push("/ventas");
    } catch (error) {
      console.error("Hubo un error", error.message);
      setError(error.message);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    iniciarSesion();
  };

  return (
    <section className={BgImage.background}>
      <div className="row justify-content-center justify-items-center">
        {error && <h2 className="text-center text-danger">{error}</h2>}
        <div className="card mt-4 rounded col-md-4">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <h1 className="text-center">UPayWeb</h1>
              <div className="form-group">
                <label>correo: </label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>contraseña: </label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>

              <div className="row justify-content-around">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
                <Link
                  to={"/create-account"}
                  className="btn btn-outline-primary"
                >
                  Crear cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
