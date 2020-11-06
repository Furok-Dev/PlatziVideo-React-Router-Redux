/**
 * Este archivo es la entrada de nuestra app
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
//Añadimos Redux y React-Redux
import { Provider } from 'react-redux';
//Logica para el Store y compartirla a la app
import { createStore } from 'redux';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app'),
);
