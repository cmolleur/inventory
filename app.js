var  express         = require('express');
var  morgan          = require('morgan');
var  mongoose        = require('mongoose');
var  bodyParser      = require('body-parser');
var  app             = express();
var indexRouter = require('./server/routes/index.js');
var itemsRouter = require('./server/routes/api/items.js');

app.set('view engine', 'ejs')
// connect to db
// process.env.MONGOLAB_URI is needed for when we deploy to Heroku
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/" );

app.use(express.static('client/public'));

// log requests to STDOUT
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var indexRouter = require('./server/routes/index.js');
app.use('/', indexRouter);

var itemsRouter = require('./server/routes/api/items.js');
app.use('/api/items', itemsRouter);


// Set static file root folder


var port = process.env.PORT || 8080;

app.listen( port, function(){
  console.log( "I'm waiting for you on 8080 :)" );
});
