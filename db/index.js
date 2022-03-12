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
    return this.connection.promise().query("INSERT INTO roles SET ?", roleData);
  }

  addThisEmployee(employeeData) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employeeData);
  }

  getManager(departmentIdData) {
    return this.connection.promise().query(
      "SELECT column_name
    FROM table1
    LEFT JOIN table2
    ON table1.column_name = table2.column_name;", departmentIdData);
  }

  updateThisEmployeeRole(roleIdData, employeeIdData) {
    return this.connection
      .promise()
      .query("UPDATE employee SET role_id = ? WHERE id = ?", [
        roleIdData,
        employeeIdData,
      ]);
  }
}

module.exports = Database;
