const inquirer = require("inquirer");

const addNewDepartment = () => {
  return inquirer.prompt([
    {
      name: "departmentName",
      message: "What is the new department Name?",
      type: "input",
    },
  ]);
};

const addNewRole = () => {
  return inquirer.prompt([]);
};
const addNewEmployee = () => {
  return inquirer.prompt([]);
};
const updateCurrentEmployeeRole = () => {};

module.exports = {
  addNewDepartment,
  addNewRole,
  addNewEmployee,
  updateCurrentEmployeeRole,
};
