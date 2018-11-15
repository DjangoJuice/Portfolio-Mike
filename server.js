// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


require("./routes/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================

// db.sequelize.sync().then(function() {
//     app.listen(PORT, function() {
//       console.log("App listening on PORT " + PORT);
//     });
//   });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });