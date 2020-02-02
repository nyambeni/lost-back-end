const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const sqlconn=require('../conn/conn');





router.post('/login',(req,res)=>{
    var email= req.body.email;
    var password = req.body.password;
    sqlconn.query('SELECT * FROM client WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
   
      res.send({ "failed":"error ocurred" })
    }else{
   
      if(results.length >0){
        if(results[0].password == password){

          res.send({"success":"login sucessfull"});
        }
        else{
          res.send({"success":"Email and password does not match" });
        }
      }
      else{
        res.send({ "success":"Email does not exits"});
      }
    }
    });
})
module.exports = router ;