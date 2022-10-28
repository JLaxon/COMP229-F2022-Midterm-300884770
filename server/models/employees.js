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
