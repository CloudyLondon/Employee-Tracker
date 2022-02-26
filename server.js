//connect to database
const { prompt } = require("inquirer");
require("console.table"); //look up console.table
const connection = require("./db/connection");

const Database = require("./db/index");
const mysql = new Database(connection);

//THEN I am presented with the following options:
// 1. view all departments,
// 2. view all roles,
// 3. view all employees,
// 4. add a department,
// 5. add a role,
// 6. add an employee,
// 7. and update an employee role
// need the 7 functions

function viewDepartments() {
  mysql.viewAllDepartments().then(function (data) {
    console.table(data[0]);
  });
}
viewDepartments();

function viewRoles() {}

function viewEmployees() {}

function addDepartment() {}

function addRole() {}

function addEmployee() {}

function updateEmployeeRole() {}
