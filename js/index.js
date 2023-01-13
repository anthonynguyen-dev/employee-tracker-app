const inquirer = require("inquire");
const inquirer = require("inquirer");
const mysql = require("mysql2/promise");
const cTable = require("console.table");
require("dotenv").config();

//init function in order to use async and await
async function init() {
  //connection to mysql
  const db = await mysql.createConnection({
    host: "localhost",
    // MySQL username,
    user: "root",
    password: "mypasswordexample",
    database: "employeeDB",
  });

  //Starting message
  console.log(`------------------------------------------------------------
                Welcome to the Employee Database
------------------------------------------------------------`);
  mainPrompt();

  //the main inquirer prompt
  function mainPrompt() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do?",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee",
            "Quit",
          ],
          default: "View all departments",
          name: "menu",
        },
      ])
      .then((response) => {
        if (response.menu == "Quit") {
          console.log("Exiting");
          process.exit();
        } else {
          //send to menuHandler function
          menuHandler(response.menu);
        }
      });
  }
}
