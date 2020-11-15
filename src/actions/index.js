/**
 * Esta accion se encarga de describir la accion
 * que estamos realizando
 *
 */

//Accion que describe , lo que vamos a hacer
export const setFavorite = playload => ({
  type: 'SET_FAVORITE',
  playload,
});

export const deleteFavorite = playload => ({
  type: 'DELETE_FAVORITE',
  playload,
});

//Envia la informacion del formulario a nuestro estado
export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});

//accion para cerrar section

export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
});
