'use strict';

var db = require('../config/db');
var uuid = require('uuid');

db.query(`CREATE TABLE IF NOT EXISTS rooms(
            name TEXT,
            id int PRIMARY KEY AUTO_INCREMENT)`);

exports.findAll = function(callback) {
    db.query('SELECT * FROM rooms', callback);
};

exports.create = function(room, callback) {
    if(!room) return callback('Error! No room received!');
    var newRoom = {
        "name": room.name
    };
    db.query(`INSERT INTO rooms (name)
                VALUES ('${newRoom.name}');`,
                callback(null));
};

exports.deleteById = function(id, callback) {
    if(!id) return callback('Error! You must define an id!');
    db.query(`DELETE FROM rooms WHERE id = '${id}';`, callback(null))
}
