const mongoose = require('mongoose')
const userSchema = require('../schemas/UserSchema');

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;