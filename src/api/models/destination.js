const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const destination = new Schema({ 
      location: String,
      content: String,
      rank: Number,
      img: String,
      
    
},{timestamps: true})


module.exports = mongoose.model('destination', destination)