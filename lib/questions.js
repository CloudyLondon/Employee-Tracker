const inquirer = require("inquirer");

const pickTheDepartment = function () {
  //what am i and whats gonna happen
  // map an array -> use (.map)  to create an array that give me choices for the department
  mysql.viewAllDepartments().then(function (departmentData) {
    const pickDepartment = departmentData[0].map((department) => {
      return { name: department.name, value: department.id };
    });
  });
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
      name: "departmentId",
      message: "Which department does this role belongs?",
      type: "list",
      choices: pickTheDepartment, //i need the choices somewhere else, make functions,
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
      choices: pickRole,
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
      choices: pickEmployee,
    },
    {
      name: "newRole",
      message: "What is the employee's new role?",
      type: "list",
      choices: pickRole,
    },
  ]);
};

module.exports = {
  addNewDepartment,
  addNewRole,
  addNewEmployee,
  updateCurrentEmployeeRole,
};
