import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Context from "./firebase/Context";
import useAutentication from "./hooks/useAuthentication";

import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import Inventario from "./Components/Inventario";
import BgImage from "./css/algo.module.css";
import Header from "./Components/Header";
import Ventas from "./Components/Ventas/Ventas";
import NuevoProducto from "./Components/NuevoProducto";

const App = () => {
  const usuario = useAutentication();

  return (
    <Context>
      <BrowserRouter>
        {!usuario ? (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/create-account" component={CreateAccount} />
          </Switch>
        ) : (
          <Fragment>
            <Header />
            <div className={`${BgImage.backgroundP}`}>
              <Switch>
                <Route exact path="/inventario" component={Inventario} />
                <Route exact path="/ventas" component={Ventas} />
                <Route exact path="/nuevo-producto" component={NuevoProducto} />
              </Switch>
            </div>
          </Fragment>
        )}
      </BrowserRouter>
    </Context>
  );
};

export default App;
