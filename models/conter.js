const mongoose=require('mongoose');

// this model to get id of product 
const counterSchema=mongoose.Schema({
   _id:{
       type:String
   },seq:{
       type:Number
   }
});
const Counter=mongoose.model('Counter',counterSchema);
module.exports=Counter;