// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
// ===============================================================
var app = express();
var PORT = process.env.PORT || 3000;
//app.use(express.static(__dirname + '/app/public'));

// Sets up the Express app to handle data parsing
//=================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Linking the routing 
//=================================================================

var apiRouter = require('./app/routing/api-routes.js')(app);
var htmlRouter = require('./app/routing/html-routes.js')(app);

// Starts the server to begin listening
// ===============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });