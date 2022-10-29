// Filename: index.js
// Author: Jonathan Laxon
// Student Id: 300884770
// Web App Name: Midterm

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let employee = require("../models/employees");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    employees: "",
  });
});

module.exports = router;
