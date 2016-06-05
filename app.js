// modules and middleware!
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var items = require('./routes/api/items');

var app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use(express.static('./public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

// var mongoPath = 'mongodb://localhost/blogPosts';
var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/user_auth" );

//routing!
app.get('/', function(req,res){
  res.render('index');
});

app.use('/api/items', indexRouter);

app.use('/api/items', items);

//listen!
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("...listening on port" + port);
});
