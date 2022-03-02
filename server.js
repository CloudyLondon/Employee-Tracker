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

//TODO: add functon menu
//which will prompt the user to select what they want to do

//make a giant switch statement which includes:
//first. i need a {prompt} thats has all the thing that i want to go thru (view ... ... .. add new... ... update (all 7 of them))
//then. i need (.then)(check inquirer)
// const inquirer = require('inquirer');
//use below:

// inquirer
//   .prompt([
//     {
//       name: 'faveReptile',
//       message: 'What is your favorite reptile?'
//     },
//   ])
//   .then(answers => {
//     console.info('Answer:', answers.faveReptile);
//   });

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
  addNewRole().then(function (data) {
    console.log(data.roleData);
    mysql.addThisRole(data.roleData).then(function (response) {
      console.log(response);
    });
  });
}
addRole();

function addEmployee() {
  //add questions with inquirer to collect data from user input
  mysql.addNewEmployee(employeeData).then(function (data) {});
}

function updateEmployeeRole(roleIdData) {
  //add questions with inquirer to collect data from user input
  mysql.updateCurrentEmployeeRole(roleIdData).then(function (data) {});
}
