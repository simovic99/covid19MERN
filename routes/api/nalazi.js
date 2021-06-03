const express = require('express');
const router=express.Router();

//Nalaz model
const Nalaz = require('../../models/Nalaz');
const Pacijent = require('../../models/Pacijent');
const Test = require('../../models/Test');
//@routue GET api/nalazi
router.get('/',(req,res)=>{
Nalaz.find().populate("pacijent").populate("test")
.then(nalazi=>res.json(nalazi)
);


});

//CREATE
router.post('/',(req,res)=>{
 
    const newNalaz=new Nalaz({ 
     pacijent:req.body.pacijent,
     test:req.body.test,
     datum:req.body.datum,
      rezultat:req.body.rezultat});
        newNalaz.save().then(item=>res.json(item));
    
});
//DELETE
router.delete('/:id',(req,res)=>{
  Nalaz.findById(req.params.id)
  .then(item=> item.remove().then(()=>res.json({sucess:true})));
    
});

module.exports= router;
