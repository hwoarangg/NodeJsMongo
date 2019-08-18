var mongoose= require('mongoose')

var courseSchema = mongoose.Schema({

    name:String,
    outher:{type:mongoose.Types.ObjectId, ref:'outher'},
})

module.exports= mongoose.model('Course',courseSchema)