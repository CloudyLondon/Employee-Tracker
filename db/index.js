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

  viewALLRoles() {
    return this.connection.promise().query("SELECT * FROM role");
  }

  viewALLEmployees() {
    return this.connection.promise().query("SELECT * FROM employee");
  }

  addThisDepartment() {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", departmentData); //the data is coming from inquirer prompt, ill need to rmb to name them the same name
  }

  addThisRole() {
    return this.connection.promise().query("INSERT INTO role SET ?", roleData);
  }

  addThisEmployee() {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employeeData);
  }

  updateThisEmployeeRole() {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id WHERE ID ?", roleIdData);
  }
}

module.exports = Database;
