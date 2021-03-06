'use strict';

var express = require('express');
var router = express.Router();

var Room = require('../models/room');

// GET /api/rooms
router.get('/', (req, res, next) => {
    Room.findAll((err, rooms) => {
        if(err) return res.status(400).send(err);
        res.json(rooms);
    });
});

// POST /api/rooms
router.post('/', (req, res, next) => {
    Room.create(req.body, (err) => {
      if(err) return res.status(400).send(err);
      res.send('You have created a new room!');
    });
});

// DELETE /api/rooms
router.delete('/:id', (req, res, next) => {
    //delete one post by ID
    var id = req.params.id;
    Room.deleteById(id, (err) => {
      if(err) return res.status(400).send(err);
      res.send('You have deleted the room!');
    })
})

// PUT /api/rooms
router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    Room.editById(id, req.body, (err) => {
      if(err) return res.status(400).send(err);
      res.send('You have edited the room!');
    })
})

// GET /api/rooms
router.get('/allitembyroom/:id', (req, res, next) => {
    var id = req.params.id;
    Room.itemsByRoomId(id, (err, items) => {
      if(err) return res.status(400).send(err);
      res.send(items);
    })
})


module.exports = router;
