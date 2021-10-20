const router = require("express").Router();
const restaurantsRouter = require ("./restaurants.routes");

router.use("/restaurants", restaurantsRouter)



module.exports = router;
