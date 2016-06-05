var express = require('express');
var router = express.Router();
var Item = require('../../models/item');

// Get
router.get('/', function(req, res){
  Item.find({}, function(err, dbItems){
    res.json({ items: dbItems})
  });
});

// Show One
router.get('/:id', function(req, res){
  Item.findById( req.params.id, function( err, dbItems){
    res.json( dbItem );
  });
});

// Post Item
router.post('/', function(req, res){
  console.log(req.body)
  Item.create(req.body.idea, function(err, item){
    res.json(item);
  });
});


// Delete

router.delete('/:id', function(req, res) {
  console.log('deleting!');
  Item.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});


module.exports = router;
