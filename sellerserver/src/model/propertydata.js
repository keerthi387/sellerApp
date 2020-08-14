const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/property');
const Schema=mongoose.Schema;

const propertySchema=new Schema({

// propertyId:Number,
propertyName:String,
propertyCode:String,
description:String,
rent:String,
starrating:String,
imageUrl:String,
address:String,
contactnumber:Number


})

var propertydata=mongoose.model('propertydata',propertySchema);

module.exports=propertydata;