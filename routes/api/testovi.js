const express = require('express');
const router=express.Router();

//Test model
const Test = require('../../models/Test');
//@routue GET api/Testovi
router.get('/',(req,res)=>{
Test.find()
.then(Testovi=>res.json(Testovi))});

//CREATE
router.post('/',(req,res)=>{
    const newTest=new Test({ 
        vrsta: req.body.vrsta});
        newTest.save().then(item=>res.json(item));
    
});
//DELETE
router.delete('/:id',(req,res)=>{
  Test.findById(req.params.id)
  .then(item=> item.remove().then(()=>res.json({sucess:true})));
    
});

module.exports= router;
