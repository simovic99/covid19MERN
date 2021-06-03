const mongoose = require('mongoose');

const Schema= mongoose.Schema;

//CREATE SCHEMA

const TestSchema=new Schema({
  vrsta:{
      type:String
  }
   


});
module.exports= Test= mongoose.model('Test',TestSchema);
