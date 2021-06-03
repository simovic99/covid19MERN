const express = require('express');
const router=express.Router();

//pacijent model
const Pacijent = require('../../models/Pacijent');
//@routue GET api/pacijenti
router.get('/',(req,res)=>{
Pacijent.find()
.then(pacijenti=>res.json(pacijenti))});

//CREATE
router.post('/',(req,res)=>{
    const newPacijent=new Pacijent({ 
        ime: req.body.ime,
        prezime: req.body.prezime});
        newPacijent.save().then(item=>res.json(item));
    
});
//DELETE
router.delete('/:id',(req,res)=>{
  Pacijent.findById(req.params.id)
  .then(item=> item.remove().then(()=>res.json({sucess:true})));
    
});

module.exports= router;
