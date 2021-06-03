const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const Pacijent = require('./Pacijent');
const Test= require('./Test');
//CREATE SCHEMA

const NalazSchema=new Schema({
   
    pacijent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pacijent'

    },
    test:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Test'
    },

   rezultat:{
       type:String,
   },
   datum:{
       type:Date,
   }

});
module.exports= Nalaz= mongoose.model('Nalaz',NalazSchema);
