//import all our requirements
const express = require("express");
const morgan = require("morgan");
const path = require("path");

//create our server
const app = express();

//plug in our middleware
//helps us as developers within the development process to catch errors, parse our requests and log data

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public"))); //serving up static files (e.g. css files)

//tell our app how to route requests to our api (database)
app.use("/", require("./routes"));

//export our app
module.exports = app;
