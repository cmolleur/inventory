var mongoose = require('mongoose');

var inventoryShema = new mongoose.Schema({
  item: { type: String },
  details: { type: String },
  amount: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Item', inventoryShema);
