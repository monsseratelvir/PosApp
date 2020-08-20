import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Context from './firebase/Context'

import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import Inventario from './Components/Inventario';
import BgImage from './css/algo.module.css'
import Header from './Components/Header';
import Ventas from './Components/Ventas/Ventas';
import Informe from './Components/Informe';
import NuevoProducto from './Components/NuevoProducto';
import NuevaVenta from './Components/NuevaVenta';

const App = () => {
  return (
    <Context>
      <BrowserRouter>
    <Header />
    <div className={`${BgImage.backgroundP}`}>
      <Switch>       
        <Route exact path='/' component={Login} />        
        <Route exact path='/create-account' component={CreateAccount} />
        <Route exact path='/inventario' component={Inventario} />
        <Route exact path='/ventas' component={Ventas} />
        <Route exact path='/informe' component={Informe} />
        <Route exact path='/nuevo-producto' component={NuevoProducto} />
        <Route exact path='/nueva-venta' component={NuevaVenta} />        
      </Switch>
      </div>
    </BrowserRouter>
    </Context>
  );
};

export default App;