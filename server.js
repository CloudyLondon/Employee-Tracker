//connect to database
const { prompt } = require("inquirer");
require("console.table"); //look up console.table
const connection = require("./db/connection");
const inquirer = require("inquirer");

const Database = require("./db/index");
const mysql = new Database(connection);
const {
  addNewDepartment,
  addNewRole,
  addNewEmployee,
  updateCurrentEmployeeRole,
} = require("./lib/questions");

//THEN I am presented with the following options:
// 1. view all departments,
// 2. view all roles,
// 3. view all employees,
// 4. add a department,
// 5. add a role,
// 6. add an employee,
// 7. and update an employee role
// need the 7 functions

//TODO: add functon menu
//which will prompt the user to select what they want to do

//make a giant switch statement which includes:
//first. i need a {prompt} thats has all the thing that i want to go thru (view ... ... .. add new... ... update (all 7 of them))
//then. i need (.then)(check inquirer)

//use below:

const startQuery = function () {
  inquirer
    .prompt([
      {
        name: "start",
        type: "list",
        message: "What do you want to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add a New Department",
          "Add a New Role",
          "Add a New Employee",
          "Update an employee's Role",
          "None of above",
        ],
      },
    ])
    .then((response) => {
      switch (response.start) {
        case "View All Departments":
          viewDepartments();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "View All Employees":
          viewEmployees();
          break;

        case "Add a New Department":
          addDepartment();
          break;

        case "Add a New Role":
          addRole();
          break;

        case "Add a New Employee":
          addEmployee();
          break;

        case "Update an employee's Role":
          updateEmployeeRole();
          break;

        case "None of Above":
          console.log("Ok, see ya!");
          connection.end();
          break;
      }
    });
};
startQuery();

function viewDepartments() {
  mysql.viewAllDepartments().then(function (data) {
    console.table(data[0]);
    startQuery();
  });
}

function viewRoles() {
  mysql.viewAllRoles().then(function (data) {
    console.table(data[0]);
    startQuery();
  });
}

function viewEmployees() {
  mysql.viewAllEmployees().then(function (data) {
    console.table(data[0]);
    startQuery();
  });
}

function addDepartment() {
  //add questions with inquirer to collect data from user input
  addNewDepartment().then(function (data) {
    //addNewDepartment() is from questions
    console.log(data.departmentName);
    mysql.addThisDepartment(data.departmentName).then(function (response) {
      console.log("Success!");
      startQuery();
    });
  });
}

function addRole() {
  //add questions with inquirer to collect data from user input
  addNewRole().then(function (data) {
    // addNewRole is from questions, so
    // the data is from addNewRole()
    console.log(data);
    mysql.addThisRole(data).then(function (response) {
      console.log("Success!");
      startQuery();
    });
  });
  // .catch(function (error) {
  //   console.error(error);
  // });
}

function addEmployee() {
  //add questions with inquirer to collect data from user input
  addNewEmployee().then(function (data) {
    console.log(data.employeeData);
    mysql.addThisEmployee(data.employeeData).then(function (response) {
      console.log(response);
      startQuery();
    });
  });
}

function updateEmployeeRole() {
  //add questions with inquirer to collect data from user input
  updateCurrentEmployeeRole().then(function (data) {
    mysql.updateThisEmployeeRole(data.employeeData).then(function (response) {
      console.log(response);
      startQuery();
    });
  });
  // mysql.updateCurrentEmployeeRole(roleIdData).then(function (data) {});
}
