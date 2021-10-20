import RestaurantComponent from "./RestaurantComponent";

function Restaurants({ shownRestaurants }) {
  return (
    <div className="section-center">
      <RestaurantComponent shownRestaurants={shownRestaurants} />
    </div>
  );
}

export default Restaurants;
// Single restaurant component is wrong. There should be a map here, so the isClicked works.