/**
 * Archivo que manejara las rutas de nuestra APP
 */

//imports necesarios
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';

//creamos la app
const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
  </BrowserRouter>
);

export default App;
