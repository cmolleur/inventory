//modules!
var express = require('express');
var router = express.Router();
var Item = require('../../models/item');

// get all
router.get('/', function(req, res){
  Item.find({}, function(err, databaseItems){
    res.json({items: databaseItems});
  });
});

// add single item
router.post('/', function(req,res){
  Item.create(req.body.item, function(err, databaseItem){
    res.json(databaseItem);
  });
})


// DELETE
router.delete('/:id', function(req, res, next) {
  var id = req.params.id;
  Item.findByIdAndRemove(id, function(err){
    if (err) {
      res.status(500).end();
    }else {
      res.status(204);
    }
  });

});

//exports!
module.exports = router;
