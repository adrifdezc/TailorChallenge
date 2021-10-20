import React, { useState } from "react";
import './App.css';
import axios from "axios";
import {useEffect} from "react";
import Categories from "./components/Categories";
import Restaurants from "./components/Restaurants";
const URL = "http://localhost:5005/api";


function App() {
  const [restaurants, setRestaurants] = useState([])
  const [shownRestaurants, setShownRestaurants]=useState([])
  const allCategories = ['All', ...new Set(restaurants?.map((restaurant)=> restaurant.cuisine_type))]
  const [categories, setCategories] = useState(allCategories)

  
  const filterItems = (category) =>{
    if(category === 'All'){
      setShownRestaurants(restaurants);
      return;
    }
    const newRestaurants = restaurants.filter((restaurant)=> restaurant.cuisine_type === category);
    setShownRestaurants(newRestaurants)
  };
  
  useEffect(()=>{
    axios
    .get(`${URL}/restaurants`)
    .then((res)=>{
      setRestaurants(res.data)
      setShownRestaurants(res.data)
    })
  }, [])

  return (
    <main>
      <section className="restaurants-section">
        <div className="title">
          <h2>Our Restaurants</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        
       <Restaurants shownRestaurants={shownRestaurants}/>
      </section>
    </main>
  );
}

export default App;
