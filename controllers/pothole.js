const validator = require('validator');
const User = require('../models/User');
const Device = require('../models/device');
const Pothole = require('../models/pothole');
const { next } = require('cheerio/lib/api/traversing');
/**
 * Expose an endpoint for the authorized devices to report their findings of potholes
 */
exports.markPothole =  (req,res) => {
    const validationErrors = [];
    if(!req.body.lat || !validator.isNumeric(req.body.lat)) validationErrors.push({msg: 'Please provide a valid latitude'});
    if(!req.body.lng || !validator.isNumeric(req.body.lng)) validationErrors.push({msg: 'Please provide a valid longitude'})
    if(validationErrors.length){
        return res.send(Object.assign({}, validationErrors)).status(400);
    }
    Device.find({serialNumber : req.body.serialNumber},(err,device) => {
        if(!device) return res.sendStatus(401);
        User.findOne({id : device.parentUserId}).then((user) => {
            if(!user) return res.sendStatus(500);
            const pothole = new Pothole({
                lat: req.body.lat,
                lng: req.body.lng,
                parentUserId: user.id
            });
            user.capturedPotholes.push(pothole);
            user.save((err)=> {
                if(err) return next(err);
            })
        });
        return res.send({success:true}).status(201);
    });
}
/**
 * Get Potholes for a specifed range
 */
exports.getPotholes =async (req,res) => {
    var minlat = -90;
    var maxlat = 90;
    var minlng = -180;
    var maxlng = 180;
    minlat = Math.max(minlat, Number(req.query.minlat)) || minlat;
    maxlat = Math.min(maxlat, Number(req.query.maxlat)) || maxlat;
    minlng = Math.max(minlng, Number(req.query.minlng)) || minlng;
    maxlng = Math.min(maxlng, Number(req.query.maxlng)) || maxlng;
    const users = await User.find();
    var potholes = [];
    users.forEach(user => {
        user.capturedPotholes.forEach(pothole => {
            potholes.push(pothole);
        });
    });
    potholes = potholes.filter(pothole => 
        pothole.lat >= minlat &&
        pothole.lat <= maxlat &&
        pothole.lng >= minlng &&
        pothole.lng <= maxlng
    );
    return res.json(potholes);
}