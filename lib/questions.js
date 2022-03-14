const { restoreDefaultPrompts } = require("inquirer");
const inquirer = require("inquirer");
const connection = require("../db/connection");
const Database = require("../db/index");
const mysql = new Database(connection);

const departmentList = async function () {
  let viewAllDepartments = await mysql.viewAllDepartments();
  let pickDepartment = viewAllDepartments[0].map((department) => {
    return { name: department.name, value: department.id };
  });
  return pickDepartment;
  // what am i and whats gonna happen
  // map an array -> use (.map) to create an array that give me choices for the department
};

const roleList = async function () {
  let viewAllRoles = await mysql.viewAllRoles();
  let pickRole = viewAllRoles[0].map((role) => {
    return { name: role.title, value: role.id };
  });
  return pickRole;
};

const managerList = async function () {
  let viewAllEmployees = await mysql.viewAllEmployees();
  let pickEmployee = viewAllEmployees[0].map((employee) => {
    return {
      name: employee.first_name + " " + employee.last_name,
      value: employee.id,
    }; //it has something here
  });
  pickEmployee.push({
    name: "I am the boss",
    value: null,
  });
  return pickEmployee;
};

const employeeList = async function () {
  let viewAllEmployees = await mysql.viewAllEmployees();
  let pickEmployee = viewAllEmployees[0].map((employee) => {
    return {
      name: employee.first_name + " " + employee.last_name,
      value: employee.id,
    }; //it has something here
  });
  return pickEmployee;
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

const addNewRole = () => {
  return inquirer.prompt([
    {
      name: "title",
      message: "What is the job title of the new role?",
      type: "input",
    },
    {
      name: "department_id",
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
      name: "first_name",
      message: "What is the new employee's first name?",
      type: "input",
    },
    {
      name: "last_name",
      message: "What is the new employee's last name?",
      type: "input",
    },
    {
      name: "role_id",
      message: "Please choose the employee's role.",
      type: "list",
      choices: roleList,
    },
    {
      name: "manager_id",
      message: "Is this employee has a manager?",
      type: "list",
      choices: managerList,
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
