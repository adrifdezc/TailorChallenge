import React from "react";
import { useState } from "react";

function RestaurantComponent({ shownRestaurants }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  
  return (
    <>
      {shownRestaurants?.map((restaurant) => {
        const { id, name, image, neighborhood, reviews } = restaurant;
        let sum = 0;
        let i = 0;
        let amount = 0;
        for (i in reviews) {
          sum += reviews[i].rating;
          amount = reviews.length;
        }
        let average = sum / amount;

        return (
          <article key={id} className="restaurant-item">
            <img src={image} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
              </header>
              <div className="details">
                <p>{neighborhood}</p>
                {average.toFixed(2) >= 4.5 ? (
                  <p>⭐⭐⭐</p>
                ) : average.toFixed(2) >= 4 ? (
                  <p>⭐⭐</p>
                ) : (
                  <p>⭐</p>
                )}
              </div>
              <button onClick={handleClick}>See Details</button>
              {isClicked ? <p>HELLO</p> : null}
            </div>
          </article>
        );
      })}
    </>
  );
}

export default RestaurantComponent;
