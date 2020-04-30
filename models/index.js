//import our requirements
const db = require("./database");
const Candy = require("./candyModel");
const Dino = require("./dinoModel");

// assign our relationships
Dino.hasMany(Candy);

//export our models
module.exports = {
  Dino,
  Candy,
  db,
};
