const express = require('express');
const router = express.Router();

router.get('/lost',(req,res,next)=>{
  res.send('lost');

});

module.exports = router;