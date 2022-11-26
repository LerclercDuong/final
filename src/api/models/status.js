const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const status = new Schema({ 
      username: String,
      content : String,
      comments: Array,
      img: String,
      
    
},{timestamps: true})


module.exports = mongoose.model('status', status)