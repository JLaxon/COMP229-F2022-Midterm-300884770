// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the employee model
let employees = require("../models/employees");

/* GET employee List page. READ */
router.get("/", (req, res, next) => {
  // find all employee in the employee_detail collection
  employees.find((err, employees) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("employees/index", {
        title: "Employees",
        employees: employees,
      });
    }
  });
});

//  GET the Employee Details page in order to add a new employee
router.get("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
    res.render("employees/add", {
    title: "Add an employee",
    });
});

// POST process the Employee Details page and create a new Employee - CREATE
router.post("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  let newEmployee = employees({
    EmployeeId: req.body.EmployeeId,
    EmployeeName: req.body.EmployeeName,
    Department: req.body.Department,
    Designation: req.body.Designation,
    Salary: req.body.Salary,
  });
  employees.create(newEmployee, (err, Employee) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the employee list
      res.redirect("/employees");
    }
  });
});

// GET the Employee Details page in order to edit an existing Employee
router.get("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  let id = req.params.id; //id of actual object

  employees.findById(id, (err, employeetoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("employees/details", {
        title: "Edit an employee",
        employees: employeetoedit,
      });
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  let id = req.params.id; //id of actual object

  let updateemployee = employees({
    _id: id,
    EmployeeId: req.body.EmployeeId,
    EmployeeName: req.body.EmployeeName,
    Department: req.body.Department,
    Designation: req.body.Designation,
    Salary: req.body.Salary,
  });
  Employee.updateOne({ _id: id }, updateemployee, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book list
      res.redirect("/employees");
    }
  });
});

// GET - process the delete by specific employeename
router.get("/delete", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   let id = req.params.id;
   Employee.remove({ _id: id }, (err) => {
     if (err) {
       console.log(err);
       res.end(err);
     } else {
       //refresh employee list
       res.redirect("/employees");
     }
   });
});

module.exports = router;
