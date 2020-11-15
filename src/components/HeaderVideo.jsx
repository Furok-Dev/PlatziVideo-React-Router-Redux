import React from 'react';
//Referencia de los estilos para el header
import '../assets/styles/components/Header.scss';
//Referencia para las imagenes
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
//Añadimos un enlace para las rutas y poder movernos tranquilamente
import { Link } from 'react-router-dom';
//Conectamos nuestra app al flujo de informacion
import { connect } from 'react-redux';
//Traemos nuesto gravatar creado
import gravatar from '../assets/utils/gravatar';
//Para trabajar el logout
import { logoutRequest } from '../actions/index';

const Header = props => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <li>
                <a href="/">{user.name}</a>
              </li>
            </li>
          ) : null}
          {hasUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
//Traemos del estado el elemento que se encarga de los usuarios
const mapStateToProps = state => {
  return { user: state.user };
};

//Mapeamos la informacion
const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
