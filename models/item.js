'use strict';

var db = require('../config/db');

db.query(`CREATE TABLE IF NOT EXISTS items(
            name TEXT,
            make TEXT,
            model TEXT,
            sn TEXT,
            category TEXT,
            value INTEGER,
            room INTEGER,
            id int PRIMARY KEY AUTO_INCREMENT)`);

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
        value: item.value,
        room: item.room
    };
    db.query(`INSERT INTO items (name, make, model, sn, category, value, room)
                VALUES ('${newItem.name}',
                        '${newItem.make}',
                        '${newItem.model}',
                        '${newItem.sn}',
                        '${newItem.category}',
                        '${newItem.value}',
                        '${newItem.room}')`,
                callback(null));
};

exports.deleteById = function(id, callback) {
    if(!id) return callback('Error! You must define an id!');
    db.query(`DELETE FROM items WHERE id = '${id}';`, callback(null))
};

exports.editById = function(id, item, callback) {
    if(!id || !item) return callback('Error! You must define both id and item!');
    db.query(`UPDATE items
                SET name = '${item.name}',
                    make = '${item.make}',
                    model = '${item.model}',
                    sn = '${item.sn}',
                    category = '${item.category}',
                    value = '${item.netValue}',
                    room = '${item.room}'
                WHERE id = '${id}';`, callback);

};
