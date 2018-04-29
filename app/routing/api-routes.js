// This module has has 3 functions.
// 1--> Load the Friends JSON Objects.
// 2--> When the /api/friends route is hit, serve all the Friends JSON back.
// 3--> When the submit button is pressed , the post


console.log('API Route Connected ...');

 var router = function(app)
{

// Link in Friends Data
var friends_Data = require('../data/friends.js');
//console.log(friends_Data);

// define the home page route
app.get('/api/friends', function (req, res) {
  res.json(friends_Data);
});

// handle the post method , when the submit button is pressed on the form.

app.post('/api/friends', function(req,res){
  //grabs the new friend's scores to compare with friends in friendList array
  var newFriendScores = req.body.scores;
  var scoresArray = [];
  var friendCount = 0;
  var bestMatch = 0;

  console.log(friends_Data.length);
  console.log(req.body.scores);

  console.log(req.body);

  //runs through all current friends in list
  for(var i=0; i<friends_Data.length; i++){
    console.log(friends_Data[i]);
    var scoresDiff = 0;
    //run through scores to compare friends
    for(var j=0; j<newFriendScores.length; j++){
      scoresDiff += (Math.abs(parseInt(friends_Data[i].scores[j]) - parseInt(newFriendScores[j])));
    }

    //push results into scoresArray
    scoresArray.push(scoresDiff);
  }

  //after all friends are compared, find best match
  for(var i=0; i<scoresArray.length; i++){
    if(scoresArray[i] <= scoresArray[bestMatch]){
      bestMatch = i;
    }
  }

  //return bestMatch data
  var bFF = friends_Data[bestMatch];
  console.log(bFF);
  res.json(bFF);

  //pushes new submission into the friendsList array
  friends_Data.push(req.body);
});


};
module.exports = router;