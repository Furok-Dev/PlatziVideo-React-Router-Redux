/**
 * Archivo que manejara las rutas de nuestra APP
 */

//imports necesarios
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
//creamos la app
//Switch para que solo un elemento se renderize
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
