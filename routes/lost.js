const express = require('express');
const router = express.Router();
const con= require('../conn/conn');
const mysql = require('mysql');

router.post('/lost',(req,res)=>{

    var itemData = {

        "item_name" : req.body.item_name,
        "description" : req.body.description,
        "TIME" : req.body.TIME,
        "DATE" : req.body.DATE
    };
    var sql = "INSERT INTO lost_items set ?";
    
    con.query(sql, [itemData], function (err, result) {
     if(err){
         res.send({
                status: 401,
                error: err 
         });
     }else{
         console.log('inserted successfully')
         res.send({
               data:result,
               status:200,
               
         });
     }
    });
});
    
    
    module.exports = router;

