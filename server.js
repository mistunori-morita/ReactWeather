var express = require('express');

//create our app
var app = express();

app.use(express.static('public'));

app.listen(3002,function(){
  console.log('Express server is up on port 3002');
});
