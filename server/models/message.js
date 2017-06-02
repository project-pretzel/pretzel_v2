const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const messageSchema = new Schema({
  text: String,
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  date : { type : Date, default: Date.now },
  likes: Number,
  trend: String
});

module.exports = mongoose.model('Message', userSchema);
