const express = require('express');
const router = express.Router();

router.get('/found',(req,res,next)=>{
  res.send('found html');

});

module.exports = router;