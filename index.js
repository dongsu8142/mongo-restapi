require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const posts = require("./routes/posts");

app.use(bodyParser.json());

app.use("/posts", posts);

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB")
);

app.listen(3000);
