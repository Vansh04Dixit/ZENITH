const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userSchema = new schema({
    fullName : String,
    email : String,
    password : String,
})

module.exports = userSchema;