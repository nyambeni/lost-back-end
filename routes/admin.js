
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const sqlconn=require('../conn/conn');



//mysqlConnection.connect((err)=>{
   // if(!err)
    //    console.log('DB connected')
    //});
    

    router.post ('/updt', (req,res)=>{
    let post = ({name:req.body.name,surname:req.body.surname,idNo:req.body.idNo,email:req.body.email,phoneNo:req.body.phoneNo,address:req.body.address})
    sqlconn.query('UPDATE client SET ?',post,function(error, results, fields) {
        if (error) {
         
              res.send({message:'there are some error with with updating information'})
          
        }else
         
            
             res.send( {message:'Updated sucessfully'})
      
      });
    })


module.exports = router ;

      
      
          
   

  
