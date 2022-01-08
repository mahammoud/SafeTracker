const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const potholeSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    picture: String,
    parentUserId: Number
});

const Pothole = mongoose.model("Pothole", potholeSchema);
module.exports = Pothole;