
const mongoose=require('mongoose');

//product
const productSchema=mongoose.Schema({
   _id:{
       type:Number
   },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true   
    }
    
});
const Product=mongoose.model('Product',productSchema);
module.exports=Product;