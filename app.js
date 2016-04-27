'use strict';

const PORT = process.env.PORT || 3000;

const jade = require('jade');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const uuid = require('uuid');

var app = express();

app.use( morgan('dev') );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use( express.static('public') );
app.set('view engine', 'jade');


app.get('/', (req, res, next) => {
  res.render('index');
})

app.get('/rooms', (req, res, next) => {
  res.render('rooms');
})

app.get('/items', (req, res, next) => {
  res.render('items');
})

app.use('/api', require('./routes/api'));

// 404 handler
app.use((req, res, next) => {
  res.status(404).send({ "error": 'Page not found! 404'});
})

// create server, and listen to PORT
app.listen(PORT, (err) => {
  console.log(err || `Server listening on port ${PORT}`);
});
