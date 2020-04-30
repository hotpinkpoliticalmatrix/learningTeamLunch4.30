//create our router
const router = require("express").Router();

//import our model
const { Dino } = require("../models/index");

//GET all Dinosaurs
router.get("/", async (req, res, next) => {
  try {
    const dinos = await Dino.findAll();
    if (dinos) {
      res.status(200).json(dinos);
    } else {
      res.send("not found").status(404);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//GET a specific Dinosaur

//Create (POST) new dinosaur

//export our router
module.exports = router;
