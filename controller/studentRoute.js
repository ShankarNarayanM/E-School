
const express = require('express');
const router = express.Router();
// const mongoose = require("mongoose");
const studentSchema = require("../model/studentSchema");

router.post('/create-student',(req,res)=>{
    studentSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else 
            return res.json(data);
    })
})

router.get("/",(req,res)=>{
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else 
            return res.json(data);
    })
})

router.route("/update-student/:id")
.get((req,res)=>{
    studentSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else 
            return res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(req.params.id, {$set: req.body} , (err,data)=>{
        if(err)
            return err;
        else 
            return res.json(data);
    } )
})

router.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else 
            return res.json(data);
    })
})

module.exports = router;