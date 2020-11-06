/**
 * Contenedor de la pagina de login
 */
import React from 'react';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
//Importamos "Link" para que la navegacion sea fluida
import { Link } from 'react-router-dom';

//Referencia a los estilos del Login con Sass
import '../assets/styles/components/Login.scss';

//creamos el componente presentacional
const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form className="login__container--form">
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" defaultValue="first_checkbox" />
            Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} /> Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} /> Inicia sesión con Twitter
        </div>
      </section>
      <p className="login__container--register">
        <Link to="/register">No tienes ninguna cuenta Regístrate</Link>
      </p>
    </section>
  </section>
);

export default Login;
