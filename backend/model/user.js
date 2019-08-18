var mongoose= require('mongoose')

var userSchema = mongoose.Schema({

    email:String,
    firstName:String,
    LasrtName:String,
    password:String
})

module.exports= mongoose.model('User',userSchema)