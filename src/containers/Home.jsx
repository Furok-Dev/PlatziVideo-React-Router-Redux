import React from 'react';
//Importamos la conexion para conectarla con nuestro storage y asi hacer render de lo que necesitamos
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/HeaderVideo';
//Aqui referenciamos los estilos para que funcione
import '../assets/styles/App.scss';

//URL de la API a utilizar
// const API = 'http://localhost:3000/initalState';

const Home = ({ myList, trends, originals, searchResult }) => {
  //Añadimos el estado a la aplicacion y la API desde una funcion hook
  // const [videos, categories] = useInitialState(API);

  //Utilizamos fragment "<></>" para no incluir codigo innecesario
  return (
    <>
      <Header></Header>
      <Search isHome />
      {Object.keys(searchResult).length > 0 && (
        <Categories title="Resultados de la busqueda...">
          <Carousel>
            {searchResult.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(original => (
            <CarouselItem key={original.id} {...original} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    searchResult: state.searchResult,
  };
};
//Creamos el conector para unir a la aplicacion con el estado que le pasamos por medio del provider
//Exportamos un componente de forma normal
// export default Home;
//Enviamos el conector, y exportamos un componente conectado a nuestra app
export default connect(mapStateToProps, null)(Home);
