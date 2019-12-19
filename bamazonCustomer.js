var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

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
  console.log("Welcome to Bamazon ");

  itemList();
});

function itemsList(conn) {
  connection.query("SLECT * FROM products", function(err, res) {
    if (err) throw err;
    var items = new Table({
      head: ["ID", "Product Name", "Department Name", "Price", "Quantity"]
    });

    for (var i = 0; i < res.length; i++) {
      items.push([
        res[i].id,
        res[i].product_name,
        res[i].department_name,
        res[i].price.toFixed(2),
        res[i].stock_quantity
      ]);
    }
    console.log(items.toString());

    inquirer
      .prompt([
        {
          type: "number",
          message: "what would you like(ID)?",
          name: "id"
        },
        {
          type: "number",
          message: "How many items would you like?",
          name: "quantity"
        }
      ])
      .then(function(allproducts) {
        var quantity = allproducts.quantity;
        var itemID = allproducts.id;

        connection.query("SELECT * FROM products Where id+");
      });
  });
}
