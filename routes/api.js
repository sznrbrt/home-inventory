'use strict';

var express = require('express');
var router = express.Router();

// api router
// root: /api

// // /api/rooms
// router.use('/rooms', require('./rooms'));
// /api/items
router.use('/items', require('./items'));

module.exports = router;
