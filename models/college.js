const mongoose=require("mongoose");

const collegeSchema= new mongoose.Schema({
    collegename:{
        type:String,
        required:true
    },
    courseoffered:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('college',collegeSchema);
