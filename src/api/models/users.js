const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const users = new Schema({
   username: String, 
   password: String,
   credit: Number,
   
})

module.exports = mongoose.model('users', users)