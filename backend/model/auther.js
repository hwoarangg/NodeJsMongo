var mongoose= require('mongoose')

var autherSchema = mongoose.Schema({

    email:String,
    firstName:String,
    LasrtName:String,
    biografity:String
})

module.exports= mongoose.model('Auther',autherSchema)