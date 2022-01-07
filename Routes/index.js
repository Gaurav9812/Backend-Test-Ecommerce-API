const express=require('express');
const router=express.Router();

//if url has product  
router.get('/',function(req,res){
    res.render('in');
})
router.use('/products',require('./products'));

module.exports=router;