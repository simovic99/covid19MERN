const mongoose = require('mongoose');
const Schema= mongoose.Schema;

//CREATE SCHEMA

const PacijentSchema=new Schema({
    ime:{
        type:String
    }
    ,
    prezime:{type:String},


});
module.exports= Pacijent= mongoose.model('Pacijent',PacijentSchema);
