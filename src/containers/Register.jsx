/**
 * Contendor  de Registro de la App
 */

import React from 'react';
//Importamos Link para las rutas
import { Link } from 'react-router-dom';
//Importamos los estilos para el register
import '../assets/styles/components/Register.scss';

//Creacion del componente
const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button">Registrarme</button>
      </form>
      <Link to="/login">Iniciar sesión</Link>
    </section>
  </section>
);

export default Register;
