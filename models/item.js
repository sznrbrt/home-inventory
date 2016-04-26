'use strict';

var db = require('../config/db');
var uuid = require('uuid');

db.query(`CREATE TABLE IF NOT EXISTS items(
            name TEXT,
            make TEXT,
            model TEXT,
            sn TEXT,
            category TEXT,
            value INTEGER,
            room INTEGER,
            id TEXT)`);

exports.findAll = function(callback) {
    db.query('SELECT * FROM items', callback);
};

exports.create = function(item, callback) {
    if(!item) return callback('Error! No post received!');
    var newItem = {
        name: item.name,
        make: item.make,
        model: item.model,
        sn: item.sn,
        category: item.category,
        value: item.netValue,
        room: item.room,
        id: uuid()
    };
    db.query(`INSERT INTO items (name, make, model, sn, category, value, room, id)
                VALUES ('${newItem.name}',
                        '${newItem.make}',
                        '${newItem.model}',
                        '${newItem.sn}',
                        '${newItem.category}',
                        '${newItem.value}',
                        '${newItem.room}',
                        '${newItem.id}');`,
                callback(null, newItem.id));
};