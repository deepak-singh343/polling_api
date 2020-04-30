//include express and create a router
const express=require('express');
const router=express.Router();

//include express and create a router
router.use('/api',require('./api'));

//export router
module.exports=router;