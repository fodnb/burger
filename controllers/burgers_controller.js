var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


// create the router for the app and export the router at the end of the file

// setting up a function to retrieve data from mysql and render it to the page.  Gathers information from handlebar
// object and pushes the information into the index.handlebars page to use when a / is recieved from client
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.newburger, false
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;


