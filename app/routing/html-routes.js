// This module has the following functions.
// 1--> server the home page , when the route is not /survey.html;'
// 2--> serve the survey page when the route is '/survey.html'



console.log('HTML Page Route Connected ...');


const path = require("path");

// define the home page route
var router = function(app)
{

//define the home page route
app.get('/', function (req, res) {
      
  console.log(path.join(__dirname, "../public/home.html"))
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// define the survey page route
app.get('/survey', function (req, res) { 
  
  console.log(path.join(__dirname, "../public/survey.html"))
  res.sendFile(path.join(__dirname, "../public/survey.html"));
  
});




};

module.exports = router;