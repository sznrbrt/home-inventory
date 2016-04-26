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

module.exports = router;
