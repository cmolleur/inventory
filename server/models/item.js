var mongoose = require('mongoose');

var inventoryShema = mongoose.Schema({
  item: { type: String, required: true },
  details: { type: String },
  amount: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Item', inventoryShema);
