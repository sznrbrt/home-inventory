'use strict';

var db = require('../config/db');

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
};

exports.editById = function(id, room, callback) {
    if(!id || !room) return callback('Error! You must define both id and room!');
    db.query(`UPDATE rooms
                SET name = '${room.name}'
                WHERE id = '${id}';`, callback);
};

exports.itemsByRoomId = function(id, callback) {
    if(!id) return callback('Error! You must define an id and a room');
    db.query(`SELECT items.name, items.make, items.model, items.sn, items.category, items.value, items.room, items.id
                FROM items
                LEFT JOIN rooms
                ON rooms.id = items.room;`, callback);
};
