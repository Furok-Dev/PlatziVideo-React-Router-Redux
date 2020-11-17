/**
 * Contendor  de Registro de la App
 */
//Vamos a usar react-hooks para manejar lo que vamos a hacer con nuestros inputs
import React, { useState } from 'react';
//Importamos Link para las rutas
import { Link } from 'react-router-dom';
//Para que esto se una al flujo de informacion usamos conect de react-redux
import { connect } from 'react-redux';
import Header from '../components/HeaderVideo';
//importamos la accion para los inputs
import { registerRequest } from '../actions/index';
//Importamos los estilos para el register
import '../assets/styles/components/Register.scss';

//Creacion del componente
const Register = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };
  return (
    <>
      <Header isRegister></Header>
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
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
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
