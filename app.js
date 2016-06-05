var dotenv        = require('dotenv').config(),
    express       = require('express'),
    morgan        = require('morgan'),
    path          = require('path'),
    mongoose      = require('mongoose'),
    bodyParser    = require('body-parser'),
    app = express();

app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/inventory_app');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./client/public'));

var indexRouter = require('./server/routes/index.js');
var itemsRouter = require('./server/routes/api/items.js');
app.use('/', indexRouter);
app.use('/api/parties', itemsRouter);

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("Picklebacks on 8080");
});
