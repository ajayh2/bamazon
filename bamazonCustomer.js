var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table2')

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "sandhu49",
  database: "bamazon"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log(
    "Welcome to Bamazon " +
      connection.threadId
  );

  itemList();
});


function itemsList(conn) {
  conn.query("Select * from products;", (err, res) => {
      if (err) console.log("Error is: ", err + "\n");
      console.log("Here is what we currently have in stock: \n\n");
      console.table(res);
      displayChoices(conn);
  });
} 