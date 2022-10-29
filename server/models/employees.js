// Filename: employees.js
// Author: Jonathan Laxon
// Student Id: 300884770
// Web App Name: Midterm

let mongoose = require("mongoose");

// create a model class
let employees = mongoose.Schema(
  {
    EmployeeId: Number,
    EmployeeName: String,
    Department: String,
    Designation: String,
    Salary: Number,
  },
  {
    collection: "employees",
  }
);

module.exports = mongoose.model("Employee", employees);
