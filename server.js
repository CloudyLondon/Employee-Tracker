//connect to database
const { prompt } = require("inquirer");
require("console.table"); //look up console.table
const connection = require("./db/connection");

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
//

function viewDepartments() {
  mysql.viewAllDepartments().then(function (data) {
    console.table(data[0]);
  });
}

function viewRoles() {
  mysql.viewAllRoles().then(function (data) {
    console.table(data[0]);
  });
}

function viewEmployees() {
  mysql.viewAllEmployees().then(function (data) {
    console.table(data[0]);
  });
}

function addDepartment() {
  //add questions with inquirer to collect data from user input
  addNewDepartment().then(function (data) {
    console.log(data.departmentName);
    mysql.addThisDepartment(data.departmentName).then(function (response) {
      console.log(response);
    });
  });
}
addDepartment();

function addRole() {
  //add questions with inquirer to collect data from user input
  mysql.addThisRole(roleData).then(function (data) {});
}

function addEmployee() {
  //add questions with inquirer to collect data from user input
  mysql.addThisEmployee(employeeData).then(function (data) {});
}

function updateEmployeeRole(roleIdData) {
  //add questions with inquirer to collect data from user input
  mysql.updateThisEmployeeRole(roleIdData).then(function (data) {});
}

//TODO: add functon menu
//which will prompt the user to select what they want to do
