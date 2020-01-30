const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../conn/conn');

router.post('/found', function(req, res){  
    var post = {

        "TIME" : req.body.TIME,
        "DATE" : req.body.DATE,
        "description" : req.body.description,
       "item_name" : req.body.item_name,
      

    };

    if(!post){
        res.send({
            code : 400,
            message : "FALSE"
        })
    }

    var myQuery = "INSERT INTO found_items SET ?";
    db.query(myQuery, [post], function(err, results, fields){
        if(err){
            
            res.send({
                data : err,
                code : 400,
                message : "item already exists!!!"
            }); 
        }else{
            
            console.log("results")
            res.send({
                data : results,
                code : 200,
                message : " Successfully inserted..."

            })
        }
    })
});
//
router.get('/found', function(req, res){

    const item_name = req.body.item_name;
     const searchDate=req.body.searchItem;
    var myQuery = "SELECT * FROM found_items WHERE item_name = ?";
    

    db.query (myQuery, [item_name], function(err, results){
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
