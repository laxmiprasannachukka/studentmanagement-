const express=require('express');
const router=express.Router();
const College=require('../models/college');

router.get('/',async(req,res)=>{
    try{
        const colleges=await College.find();
        res.json(colleges);
    }catch(err){
    res.send(err);
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const college=await College.findById(req.params.id);
        res.json(college);
    }catch(err){
    res.send(err);
    }
});



router.post('/',async(req,res)=>{
    const college= new College({
        collegename:req.body.collegename,
        courseoffered:req.body.courseoffered,
        location:req.body.location,
        fees:req.body.fees
    })
    try{
        const c1=await college.save();
        res.json(c1);

    }catch(err){
        res.send(err);
    }
})

module.exports=router;