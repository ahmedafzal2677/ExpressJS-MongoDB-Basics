// const express = require("express");
// const { LoginController } = require("../controller/LoginController");
import express from "express";
import LoginController from "../controller/LoginController.js";
const app = express.Router();
// const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  console.log("Home Page");
  res.send("Home Page");
  res.status(200);
});

app.get("/products", (req, res) => {
  console.log("Products Page");
  res.send("Products Page");
  res.status(200);
});

app.get("/login", LoginController.login);

// app.listen(PORT, (req, res) => {
//   console.log("app listening on port:", PORT);
// });
