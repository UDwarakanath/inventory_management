const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");


const app = express()

const PORT = process.env.PORT || 5000

// connecting db to server

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started at port ${PORT}`)
    })
  })