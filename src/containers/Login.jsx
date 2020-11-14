/**
 * Contenedor de la pagina de login
 */

//Implementamos React-Hooks para darle un estado al component para traer la data del usuario
//Para implementar React-Hooks utilizamos useState
import React, { useState } from 'react';
//Usamos Redux para conectar esta informacion con el stado
import { connect } from 'react-redux';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
//Importamos "Link" para que la navegacion sea fluida
import { Link } from 'react-router-dom';
//Traemos nuestra accion que Creamos
import { loginRequest } from '../actions';

//Referencia a los estilos del Login con Sass
import '../assets/styles/components/Login.scss';

//creamos el componente presentacional que recibe un prop
const Login = props => {
  //Trae dos valores, el formulario y donde vamos a guardar la informacion
  const [form, setValues] = useState({
    email: '',
  });

  //funcion para manejar los cambios cada vez que se escriba en los inputs
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //Usamos onChange para escuchar lo que estamos tipeando en el formulario
  //funcion que envia/trasminte los elementos caputados
  const handleSubmit = event => {
    //Con formularios siempre se debe matar la funcion de html default
    event.preventDefault();
    props.loginRequest(form);
    //usamos hitory para movernos a donde sea necesario
    props.history.push('/');
    // props.console.log(form);
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
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
};

//vamos usar el dispatcher para que envie la informacion a los accion
const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
