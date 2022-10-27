let mongoose = require("mongoose");

// create a model class
let Employee = mongoose.Schema(
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

module.exports = mongoose.model("Employee", Employee);
