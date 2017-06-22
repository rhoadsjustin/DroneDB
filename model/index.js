var mongoose = require('mongoose');


mongoose.connect('mongodb://currentUser:password@ds133922.mlab.com:33922/heroku_sdcf2cs5');


module.exports.Part = require('./part.js');
module.exports.Drone = require('./drone.js');
