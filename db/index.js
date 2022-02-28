//what do i do? my promises!
//going to make a class, inside theclass is basically my DB
// constructor class, method (a bunch of functions)
//method can be called somewhere else when importing them
//then the method can do their things~

const connection = require("./connection");

class Database {
  //importing my connection
  constructor(connection) {
    this.connection = connection;
  }
  //making methods
  //querying the DB to get these method, referring to the connection
  viewAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  viewAllRoles() {
    return this.connection.promise().query("SELECT * FROM roles");
  }

  viewAllEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }

  addThisDepartment(departmentData) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET name = ?", departmentData); //the data is coming from inquirer prompt, ill need to rmb to name them the same name
  }

  addThisRole(roleData) {
    return this.connection.promise().query("INSERT INTO role SET ?", roleData);
  }

  addThisEmployee(employeeData) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employeeData);
  }

  updateThisEmployeeRole(roleIdData) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id WHERE ID ?", roleIdData);
  }
}

module.exports = Database;
