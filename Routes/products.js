
const express=require('express');
const router=express.Router();
const productController=require('../controllers/product_contoler');

//to Fetch all product function
router.get('/',productController.index);

//to Create Product
router.post('/create',productController.create);

//to Delete function
router.delete('/:id',productController.delete);

//to update function
router.post('/:id/update_quantity',productController.update);

module.exports=router;