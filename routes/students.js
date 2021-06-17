const express=require('express');
const router=express.Router();
const Student=require('../models/student');

router.get('/',async(req,res)=>{
    try{
        const students=await Student.find();
        res.json(students);
    }catch(err){
    res.send(err);
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const student=await Student.findById(req.params.id);
        res.json(student);
    }catch(err){
    res.send(err);
    }
});



router.post('/',async(req,res)=>{
    const student= new Student({
        name:req.body.name,
        collegename:req.body.collegename,
        education:req.body.education,
        email:req.body.email,
        mobile:req.body.mobile,
        collegesapplied:req.body.collegesapplied
    })
    try{
        const a1=await student.save();
        res.json(a1);

    }catch(err){
        res.send(err);
    }
})

module.exports=router;