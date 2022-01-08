const { promisify } = require('util');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const passport = require('passport');
const _ = require('lodash');
const validator = require('validator');
const mailChecker = require('mailchecker');
const User = require('../models/User');

const randomBytesAsync = promisify(crypto.randomBytes);

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
    Device.findOne({serialNumber: req.body.serialNumber},(err, device)=>{
        if(err) return next(err)
        if(device){
            req.flash({msg:'This Device is already registered'})
            return res.redirect('/account')
        }
    })
    const device = new Device({serialNumber: req.body.serialNumber, parentUserId: user.id})
        
    user.registeredDevices.push(device)

    user.save((err) => {
        if (err) { return next(err); }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect('/');
        });
      });
})
}
