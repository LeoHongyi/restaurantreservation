/**
 * Created by hongyiliu on 11/15/16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.post('/',function(req, res, next){

    var email = req.body.email;
    var password = req.body.password;
    // console.log(email + password);

    //console.log(email + password);
    User.findOne({email:email,password:password},function (err,data) {
            if (err) {
                console.log(err);
                return res.status(500).send("500");
            }

            if (!data) {
                return res.send("fail");
            }

            return res.status(200).send("success");


    })


});

module.exports = router;