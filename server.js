
var express = require("express");

// bring in the models
var db = require("./models");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./routes/api-routes.js");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 5454;




// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force:true}).then(function() {
  db.Customers.create({
    customer_name: 'Michael Rosario',
  });
  db.Burgers.create({
    burger_name: 'The Regular Burger and Cheese',
    CustomerId: 1,
  });
  db.Burgers.create({
    burger_name: 'Mushroom Overload Burger',
    CustomerId: 1,
  });
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});