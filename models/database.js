//add requirement
const Sequelize = require("sequelize");

//create a new instance of Sequelize (remember to create the learningdinos db)
const db = new Sequelize("postgres://localhost:5432/learningdinos");

//export our db
module.exports = db;
