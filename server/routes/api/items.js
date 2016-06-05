var express = require('express');
var router = express.Router();
var Item = require('../../models/item');

// Get
router.get('/', function(req, res, next) {
  Item.find(function(err, items) {
    if (err) {
      next(err);
    }else {
      res.json(items);
    }
  })
});

router.post('/', function(req, res, next) {
  Item.create(req.body.item, function(err, item) {
    if (err) {
      next(err);
    }else {
      res.json(item);
    }
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
