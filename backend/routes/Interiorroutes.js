const express = require('express');
const router = express.Router();
const Interiorcont=require('../controllers/interiorcontroller')

//Add a new item to database
router.post('/additem',Interiorcont.additem);

module.exports=router;