require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", (error) => {
  console.log("Databse Connected");
});

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
