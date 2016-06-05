var express = require('express');
var router = express.Router();
var Item = require('../../models/item');

// Get
router.get('/', function(req, res){
  Item.find({}, function(err, dbItems){
    res.json({ items: dbItems})
  });
});

router.post('/', function(req, res){
  Item.create(req.body.item, function(err, item){
    res.json(item);
  });
});

router.delete('/:id', function(req, res, next) {
  Item.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      next(err);
    }else {
      res.status(203).end();
    }
  })
});

module.exports = router;
