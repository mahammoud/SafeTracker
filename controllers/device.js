const validator = require('validator');
const User = require('../models/User');
const Device = require('../models/device');
const { next } = require('cheerio/lib/api/traversing');

/**
 * Connect A device(raspberry pi)and associate it with a user and authorize it throught the serial number of It's cpu
 */
exports.associateDevice =async (req, res) => {
   const validationErrors = []; 
   if(!validator.isNumeric(req.body.serialNumber)) validationErrors.push({msg: "Please enter a valid serial number"});
   if (validationErrors.length) {
    req.flash('errors', validationErrors);
    return res.redirect('/account');
   }

   User.findById((req.user.id),async (err, user) => {
    if (err) { return next(err)}
    const users  =await User.find();
    var devices = [];
    users.forEach(user => {
        user.registeredDevices.forEach(devicetoadd => {
            devices.push(devicetoadd);
        });
    });
    var present = false;
    devices.every(devicetocheck => {
        if(req.body.serialNumber == devicetocheck.serialNumber){
            present = true;
            return false;
        } 
        return true;
    });
    if(present) return res.sendStatus(400);
    const device = new Device({serialNumber: req.body.serialNumber, parentUserId: user.id})
        
    user.registeredDevices.push(device)

    user.save((err) => {
        if (err) { return next(err); }
      });
    return res.sendStatus(201);
})
}
/**
 * Gets The devices of the current user
 */
exports.getDevices = (req, res) => {
    User.findById(req.user.id, (err,user)=> {
        if(err) return next(err);
        return res.json(user.registeredDevices);
    })
}