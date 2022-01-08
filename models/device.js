const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    serialNumber: String,
    parentUserId: String,
    type: String
});

const device = mongoose.model("Device", deviceSchema);
module.exports = device;