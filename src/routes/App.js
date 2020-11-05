/**
 * Archivo que manejara las rutas de nuestra APP
 */

//imports necesarios
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
//creamos la app
const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </BrowserRouter>
);

export default App;
