import React, { useState, useEffect } from 'react';
import Header from '../components/HeaderVideo';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
//Aqui referenciamos los estilos para que funcione
import '../assets/styles/App.scss';

//URL de la API a utilizar
const API = 'http://localhost:3000/initalState';

const Home = () => {
  //Añadimos el estado a la aplicacion y la API desde una funcion hook
  const [videos, categories] = useInitialState(API);

  //Utilizamos fragment "<></>" para no incluir codigo innecesario
  return (
    <>
      <Search />
      {categories.map(
        category =>
          videos[category].length > 0 && (
            <Categories title={category}>
              <Carousel>
                {videos[category].map(item => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          ),
      )}
    </>
  );
};

export default Home;
