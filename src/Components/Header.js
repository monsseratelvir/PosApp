import React from "react";
import { useHistory } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FirebaseContext } from "../firebase/Context";

const Header = () => {
     let history = useHistory()
  const { firebase } = useContext(FirebaseContext);

  const signOut = () => {
     firebase.cerrarSesion()

     history.push('/')
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to={"/ventas"} className="navbar-brand">
          PossApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to={"/inventario"} className="nav-link">
                Inventario
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/ventas"} className="nav-link">
                Ventas
              </NavLink>
            </li>
            <li>
            <button
              type="button"
              className="text-white btn btn-whithe"
              onClick={() => signOut()}
            >
              Cerrar sesion
            </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
