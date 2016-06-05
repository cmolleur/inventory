var mongoose = require('mongoose');
var Schema = mongoose.Schema

var itemSchema = new Schema({
  item: { type: String },
  details: { type: String },
  amount: { type: String },
}, { timestamps: true });


// the schema is useless so far
// we need to create a model using it
var Item = mongoose.model('Item', itemSchema);

// make this available to our users in our Node applications
module.exports = Item;
