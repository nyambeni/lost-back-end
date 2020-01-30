
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const sqlconn=require('../conn/conn');



router.post ('/d', (req,res)=>{

 
      
          let name = ({name:req.body.name,surname:req.body.surname,idNo:req.body.idNo,email:req.body.email,phoneNo:req.body.phoneNo,address:req.body.address,password:req.body.password})
      
          
         
      
      sqlconn.query('INSERT INTO client SET  ?',name, function(error, results, fields) {
        if (error) {
         
              res.send({message:'there are some error with query'})
          
        }else
         
            
             res.send( {message:'user registered sucessfully'})
      
      });
  


 })


module.exports=router;

    
    


    