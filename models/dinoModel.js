//import our requirements
const Sequelize = require("sequelize");
const db = require("./database");

//declare our model and list our attributes
const Dino = db.define("dino", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  species: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

//export our model
module.exports = Dino;
