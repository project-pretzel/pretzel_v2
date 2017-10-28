const MessageModel = require('../models/message.js');

// adds a user to the database
exports.insertMessage = function (message) {
  return MessageModel.create(message);
};

// finds a message by their user
exports.findMessagesByUser = function (user) {
  return MessageModel.find({ user });
};

exports.findMessagesByTrend = function (trend) {
  return MessageModel.find({ trend });
};
// finds a message by their ID
exports.findMessageById = function (id) {
  return MessageModel.findOne({ _id: id });
};
