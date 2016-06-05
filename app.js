// modules and middleware!
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./server/routes/index.js');
var items = require('./server/routes/api/items.js');

var app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var mongoPath = 'mongodb://localhost/blogPosts';
var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/user_auth" );


app.use('/', indexRouter);
app.use('/api/items', items);

//listen!
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("...listening on port" + port);
});
