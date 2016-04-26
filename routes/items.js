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

// DELETE /api/posts
router.delete('/:id', (req, res, next) => {
    //delete one post by ID
    var id = req.params.id;
    Item.deleteById(id, (err) => {
      if(err) return res.status(400).send(err);
      res.send('You have deleted the item!');
    })
})

// PUT /api/posts
router.put('/:id', (req, res, next) => {
    //edit one post by ID
    var id = req.params.id;
    Item.editById(id, req.body, (err) => {
      if(err) return res.status(400).send(err);
      res.send('You have edited the item!');
    })
})

module.exports = router;
