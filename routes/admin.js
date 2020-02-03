
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const sqlconn=require('../conn/conn');



 
outer.put('/found', function(req, res){

    let name =({email:req.body.email,phoneNo:req.body.name})
     
    var myQuery = "UPDTE client set email = ? WHERE name = ?";
    

    db.query (myQuery, [name], function(err, results){
        if(err){
            
            res.send({
                code : 400,
                message : err
            })
        }else{
            
            console.log("results")
            res.send({
                data : results,
                code : 200,
                message : "Successful..."

            })
         }
    })
});
//



module.exports = router ;

      
      
          
   

  
