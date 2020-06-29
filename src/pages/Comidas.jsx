import React, { useEffect, useState } from 'react';
import { getFoodList, getFoodsCategoriesList } from '../services/meals&drinksAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Comidas() {
  const [categoria, getCategoria] = useState(undefined);
  const [comida, getComida] = useState({});
  useEffect(() => {
    getFoodList().then((response) => getComida(response));
  }, []);
  useEffect(() => {
    getFoodsCategoriesList().then((response) => getCategoria(response));
  }, []);
  if (comida.meals && categoria.meals) {
    const botoes = categoria.meals.slice(0, 5);
    const cards = comida.meals.slice(0, 12);
    return (
      <React.Fragment>
        <Header iconProfile={profileIcon} iconSearch={searchIcon} title="Comidas" />
        {botoes.map((category) => <button>{category.strCategory}</button>)}
        <ul>{cards.map((food) =>
            <div className="card">
              <img src={food.strMealThumb} alt="food" />
              <p>{food.strMeal}</p>
            </div>)}</ul>
        <Footer />
      </React.Fragment>
    );
  } 
  return (
    <React.Fragment>
      <Header iconProfile={profileIcon} iconSearch={searchIcon} title="Comidas" />
      <p>Loading...</p>
    	<Footer />
    </React.Fragment>
  );
}
