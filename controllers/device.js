const validator = require('validator');
const User = require('../models/User');
const Device = require('../models/device');
const { next } = require('cheerio/lib/api/traversing');

exports.associateDevice = (req, res) => {
   const validationErrors = []; 
   if(!validator.isNumeric(req.body.serialNumber)) validationErrors.push({msg: "Please enter a valid serial number"});
   if (validationErrors.length) {
    req.flash('errors', validationErrors);
    return res.redirect('/account');
   }

   User.findById((req.user.id), (err, user) => {
    if (err) { return next(err)}
    Device.find({serialNumber: req.body.serialNumber},(err,device)=>{
        if(device){
            req.flash({msg:'This Device is already registered'})
            return res.redirect('/account')
        }
    })
    const device = new Device({serialNumber: req.body.serialNumber, parentUserId: user.id})
        
    user.registeredDevices.push(device)

    user.save((err) => {
        if (err) { return next(err); }
      });
})
}
