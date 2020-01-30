
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const sqlconn=require('../conn/conn');



router.PUT('/up', (req, res)=>{
    sqlconn.query('UPDATE `client` SET `address`=?,`phoneNo`=? where `name`=?', [req.body.adress, req.body.phoneNo, req.body.name], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });




module.exports = router ;