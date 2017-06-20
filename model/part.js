"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PartSchema = new Schema({
    name: String,
    price: Number,
    link: String,
    category: String
});

var Part = mongoose.model('Part', PartSchema);
