var mongoose = require('mongoose');
const Promise = require('bluebird')
var path = require('path');
var db = {};

mongoose.Promise = Promise;

db.connectToDb = () => {
	console.log('Connected to db')
  mongoose.connect('mongodb://localhost/pretzel');
  return mongoose.connection; 
}

db.disconnectFromDb = () => {
  mongoose.disconnect();
}


module.exports = db;