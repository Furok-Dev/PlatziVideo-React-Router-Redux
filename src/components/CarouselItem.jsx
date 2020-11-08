import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
//Referenciamos/importamos los iconos
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
//Actualizamos el componente para hacer uso de las acciones y reducers y asi controlar el flujo de la informacion
//Conectamos la App
import { connect } from 'react-redux';
import { setFavorite } from '../actions/index'; //como ya hay index, eso se llamara automaticamente

const CarouselItem = props => {
  const { id, cover, title, year, contentRating, duration, setFavorite, myList } = props;
  const handleSetFavorite = () => {
    const exist = myList.find(item => item.id == id);
    if (exist) {
      alert('Ya lo tienes agregado a favorito');
    } else {
      setFavorite({
        id,
        cover,
        title,
        year,
        contentRating,
        duration,
      });
    }
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={handleSetFavorite}
          />
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
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
  };
};

//Export nuevo conectando la App
//connect recibe dos parametros connect(mapStateToProps,mapDispatchToProps), si no mapeamos pasamos null al primer argumento
export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
