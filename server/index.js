const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/jobready")
  .then(() => console.log("Connected!"));

app.get("/coverletter", function (req, res) {
  res.json({ title: "Hello World" });
});

app.post("/register", function (req, res) {
  console.log(req.body);
  try {
    res.json(req.body);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.listen(4000);
