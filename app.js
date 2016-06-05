var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


app.use(express.static('./client'));

app.set('views', __dirname + '/client/views')
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/items_api')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var indexRouter = require('./server/routes/index');
var itemsRouter = require('./server/routes/api/items');

app.use('/', indexRouter);
app.use('/api/items', itemsRouter);

app.listen(8080, function(){
  console.log("HERE I AM.");
});
