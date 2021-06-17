const mongoose=require("mongoose");


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    collegename:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    collegesapplied:{
        type:Array,
        required:true
    }
})

module.exports=mongoose.model('student',studentSchema);