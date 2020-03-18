

// Import the model to use its database functions.
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
    db.Burgers.findAll({
      order: [
        ['burger_name', 'ASC'],
      ],
      include: [
        {
          model: db.Customers
        }
      ],
    }).then(function(burgers) {
      // We have access to the todos as an argument inside of the callback function
      console.log(burgers);
      db.Customers.findAll().then(function(users){
        res.render("index",{burgers,users});
      });
     
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.Burgers.create({
      burger_name: req.body.burger_name,
      CustomerId: req.body.CustomerId
    }).then(function(results) {
      res.json(results);
    }).catch(function(error) {
      return res.status(500).send(error);
    }); 
  });

  app.post("/api/customer", function(req, res) {
    db.Customers.create({
      customer_name: req.body.customer_name,
    }).then(function(results) {
      res.json(results);
    }).catch(function(error) {
      return res.status(500).send(error);
    }); 
  });

  app.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    db.Burgers.update({
      devoured: req.body.devoured,
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });

  });

}