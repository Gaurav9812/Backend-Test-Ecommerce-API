const express=require('express');
const router=express.Router();

//if url has product  
router.use('/products',require('./products'));

module.exports=router;