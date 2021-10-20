const express = require("express");
const { getAllRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } = require("../controllers/restaurants.controllers");
const router = express.Router();

router.get("/", getAllRestaurants);

router.get("/:id", getRestaurant );

router.post("/", createRestaurant);

router.put("/:id", updateRestaurant);

router.delete("/:id", deleteRestaurant)

module.exports = router;
