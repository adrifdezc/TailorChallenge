const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    id: Number,
    name: String,
    neighborhood: String,
    photograph: String,
    address: String,
    latlng: {
      lat: Number,
      lng: Number,
    },
    image: String,
    cuisine_type: String,
    operating_hours: {
      Monday: String,
      Tuesday: String,
      Wednesday: String,
      Thursday: String,
      Friday: String,
      Saturday: String,
      Sunday: String,
    },
    reviews: [
      {
        name: String,
        date: String,
        rating: Number,
        comments: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
