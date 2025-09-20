require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

const port = 5000;
const app = express();

app.use(cookieParser());
app.use(express.json());



app.use("/api", routes);
app.use(express.static("../client/dist"));

mongoose.connect(process.env.DB_CONNECTION).then(() => {
  app.listen(port, () => {
    console.log(`Start server, port ${port}`);
  });
});
