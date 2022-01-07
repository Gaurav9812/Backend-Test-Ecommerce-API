const express=require('express');
const router=express.Router();

//if url has product  
router.use('/',function(req,res){
    res.render('<h1>Working</h1>');
})
router.use('/products',require('./products'));

module.exports=router;