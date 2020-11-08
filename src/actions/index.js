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
