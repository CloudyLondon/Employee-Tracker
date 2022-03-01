const inquirer = require("inquirer");

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
      //job title
      //which department
      //salary of the role
    },
  ]);
};
const addNewEmployee = () => {
  return inquirer.prompt([
    {
      // first name
      //last name
      //if manager
    },
  ]);
};
const updateCurrentEmployeeRole = () => {};
// choose employee to update
//new role

module.exports = {
  addNewDepartment,
  addNewRole,
  addNewEmployee,
  updateCurrentEmployeeRole,
};
