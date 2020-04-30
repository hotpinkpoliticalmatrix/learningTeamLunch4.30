//initiate a Router instance
const router = require("express").Router();

//tell our app how to route requests for /dinosaurs
router.use("/dino", require("./dinoRoutes"));

//export our router
module.exports = router;
