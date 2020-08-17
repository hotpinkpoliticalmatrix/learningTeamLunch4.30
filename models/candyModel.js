//import our requirements
const Sequelize = require("sequelize");
const db = require("./database");

//declare our model and list our attributes
const Candy = db.define("candy", {
  // name: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   validate: {
  //     notEmpty: true,
  //   },
  // },
  // flavor: {
  //   type: Sequelize.STRING,
  // },
});

//export our model
module.exports = Candy;
