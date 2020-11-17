import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CarouselItem.scss';
//Referenciamos/importamos los iconos
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
//Actualizamos el componente para hacer uso de las acciones y reducers y asi controlar el flujo de la informacion
//Conectamos la App
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions/index'; //como ya hay index, eso se llamara automaticamente

const CarouselItem = props => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };

  const handleDeleteFavorite = itemId => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          </Link>
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Remove Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};
//Vamos a validar con el paquete prop-types

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  config: PropTypes.string,
  duration: PropTypes.number,
};

/**
 *export default CarouselItem; => Export antiguo
 */
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

// const mapStateToProps = state => {
//   return {
//     myList: state.myList,
//   };
// };

//Export nuevo conectando la App
//connect recibe dos parametros connect(mapStateToProps,mapDispatchToProps), si no mapeamos pasamos null al primer argumento
export default connect(null, mapDispatchToProps)(CarouselItem);
