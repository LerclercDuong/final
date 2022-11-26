const mongoose = require('mongoose')

function connect() {
   mongoose.connect('mongodb://localhost:27017/duongminhtri_dev')
   .then(function(){
    console.log('Connected')
   }) .catch(function(e){
    console.log('Failed to connect')
   })
}



module.exports = {connect}