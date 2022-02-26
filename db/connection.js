//export the database connection
//put dotenv into .gitignore -> so no one sees my PW.
// local: can see my .env but my .env will never pushed to repo so no one can see my PW.

const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "myWorkers",
  },
  console.log("Connected to the myworkers database.")
);

module.exports = db;
