const express=require('express');
const mongoose=require('mongoose');
const cors = require("cors");
const url='mongodb+srv://laxmiprasanna:prasanna@123@cluster0.j0o5c.mongodb.net/test';
mongoose.connect(url,{useNewUrlParser:true});


const app=express();
const con=mongoose.connection;

con.on('open',()=>{
    console.log('connected...');
})

app.use(express.json());
app.use(cors());

const studentRouter=require('./routes/students');
app.use('/students',studentRouter);

const collegeRouter=require('./routes/colleges');
app.use('/colleges',collegeRouter);

app.listen(5000,()=>{
    console.log('server started');
})