'use strict';

var express = require('express');
var router = express.Router();

var Item = require('../models/item');

// GET /api/items
router.get('/', (req, res, next) => {
    Item.findAll((err, items) => {
        if(err) return res.status(400).send(err);
        res.json(items);
    });
});

// POST /api/items
router.post('/', (req, res, next) => {
    Item.create(req.body, (err, id) => {
      if(err) return res.status(400).send(err);
      res.send(id);
    });
});

module.exports = router;
