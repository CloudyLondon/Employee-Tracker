const inquirer = require("inquirer");
const connection = require("../db/connection");
const Database = require("../db/index");
const mysql = new Database(connection);

const departmentList = async function () {
  let viewAllDepartments = await mysql.viewAllDepartments();
  let pickDepartment = viewAllDepartments[0].map((department) => {
    return { name: department.name, value: department.id };
  });
  console.log("helloksjdbcincsdkcjnb");
  console.log(pickDepartment);
  return pickDepartment;
  // what am i and whats gonna happen
  // map an array -> use (.map) to create an array that give me choices for the department
};

const roleList = async function () {
  let viewAllRoles = await mysql.viewAllRoles();
  let pickRole = viewAllRoles[0].map((role) => {
    return { name: role.title, value: role.id };
  });
  console.log("hjbgilerhiwilgfbjkwbrf");
  console.log(pickRole);
  return pickRole;
  // mysql.viewAllRoles().then(function (roleData) {
  //   const pickRole = roleData[0].map((roles) => {
  //     return { name: roles.name, value: roles.id };
  //   });
  // });
};

const employeeList = async function () {
  let viewAllEmployees = await mysql.viewAllEmployees();
  let pickEmployee = viewAllEmployees[0].map((employee) => {
    return { name: employee.name, value: employee.id };
  });
  console.log("fbliergflhrecfgkuserbcv,jheuv");
  console.log(pickEmployee);
  return pickEmployee;
  // mysql.viewAllEmployee().then(function (employeeData) {
  //   const pickEmployee = departmentData[0].map((employee) => {
  //     return { name: employee.name, value: employee.id };
  //   });
  // });
};

const addNewDepartment = () => {
  return inquirer.prompt([
    {
      name: "departmentName",
      message: "What is the name of the new department?",
      type: "input",
    },
  ]);
};

// const addEmployee = function () {
//   connection
//     .promise()
//     .query("SELECT title, id FROM roles")
//     .then((rows) => {
//       const roleList = rows[0].map((row) => {
//         return {
//           name: row.title,
//           value: row.id,
//         };
//       });
//       inquirer
//         .prompt([
//           {
//             type: "input",
//             name: "first_name",
//             message: "Enter the employee's first name",
//           },

const addNewRole = () => {
  return inquirer.prompt([
    {
      name: "title",
      message: "What is the job title of the new role?",
      type: "input",
    },
    {
      name: "departmentId",
      message: "Which department does this role belongs?",
      type: "list",
      choices: departmentList, //i need the choices somewhere else, make functions,
    },
    {
      name: "salary",
      message: "What is the salary of this role?",
      type: "number",
    },
  ]);
};

const addNewEmployee = () => {
  return inquirer.prompt([
    {
      name: "firstName",
      message: "What is the new employee's first name?",
      type: "input",
    },
    {
      name: "lastName",
      message: "What is the new employee's last name?",
      type: "input",
    },
    {
      name: "roleId",
      message: "Please choose the employee's role.",
      type: "list",
      choices: roleList,
    },
    {
      name: "manager",
      message: "Is this employee a manager?",
      type: "confirm",
    },
  ]);
};
const updateCurrentEmployeeRole = () => {
  return inquirer.prompt([
    {
      name: "updateEmployee",
      message: "Please choose the employee to be updated.",
      type: "list",
      choices: employeeList,
    },
    {
      name: "newRole",
      message: "What is the employee's new role?",
      type: "list",
      choices: roleList,
    },
  ]);
};

module.exports = {
  addNewDepartment,
  addNewRole,
  addNewEmployee,
  updateCurrentEmployeeRole,
};
