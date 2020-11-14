/**
 * Gestionaremos las imagenes del avatar del usuario
 * donde el correo del usuario se combierte en un hash y ese hash tiene una avatar
 */

//Creamos nuestro servicio
import md5 from 'md5';

const gravatar = email => {
  const base = 'https://gravatar.com/avatar/';
  //trim elimina espacios
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });

  return `${base}${hash}`;
};

export default gravatar;
// module.exports = gravatar;
