const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const sqlconn = require('../conn/conn');
/*


module.exports = router ;
///////////////

var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render('login');
});



module.exports = router;
////////////

var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'icep2020'
});

var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json()); */

/*app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
}); */


router.post('/auth', (req,res)=>{
	var email = req.body.email;
    var password = req.body.password;
    
    sqlconn.query('SELECT * FROM client  WHERE email = ?', [email], function(error,results,fields){

    if (error){
        res.send({"failed":"error ocurred"})
    }else{
        if(results.length>0){
            if(results[0].password == password){
                res.send({"success":"login successful"});
            }else{
                res.send({"success":"Email and password does not match"});
            }
        }else{
            res.send({"success":"email does not exist"});
        }
    }
});
})
module.exports = router;
      ;
		

//app.listen(5000);
module.exports = router;

