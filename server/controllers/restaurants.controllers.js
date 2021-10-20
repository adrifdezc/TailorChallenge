const Restaurant = require("../models/Restaurant.model");
let restaurantData = require("../../restaurants.json")

module.exports.getAllRestaurants = async (req, res, next) => {
    console.log(Restaurant)
    if (Restaurant.length === 0){
        try {
        const restaurants = await Restaurant.insertMany(restaurantData);
        return res.status(200).json(restaurants);
      } catch (err) {
        return res.status(500).json(err);
      }
    }else{
        try {
          const restaurants = await Restaurant.find();
          return res.status(200).json(restaurants);
        } catch (err) {
          return res.status(500).json(err);
        }
    }
};

module.exports.getRestaurant = async (req, res, next) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findOne({ _id: id });
    return res.status(200).json(restaurant);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.createRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    return res.status(200).json(restaurant);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.updateRestaurant = async (req, res, next) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    return res.status(200).json(restaurant);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.deleteRestaurant = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Restaurant.findOneAndRemove({ _id: id });
    return res.status(200).json({ message: `Restaurant ${id} removed 🗑` });
  } catch (err) {
    return res.status(500).json(err);
  }
};
