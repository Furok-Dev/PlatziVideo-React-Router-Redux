/**
 * Este sera el componente Layout
 * que se encargara de la persistencia de los componentes
 * que necesitemos y cuando nos movamos a otra ruta este redenrizara
 * el componente que necesitemos
 */

import React from 'react';
//Importamos los componentes que vamos a mantener siempre presentes
import Header from './HeaderVideo';
import Footer from './Footer';
const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
