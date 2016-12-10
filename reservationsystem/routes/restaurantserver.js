var express = require('express');
var router = express.Router();
var Restaurant = require('../models/restaurant');

router.get('/', function(req, res, next) {
    Restaurant.getRestaurants(function(err,restaurants){
        if (err) {
            console.log(err);
        }
        res.json(restaurants);

    });

});

router.get('/:id', function(req, res, next) {
    Restaurant.getRestaurantById(req.params.id,function(err,restaurant){
        if (err) {
            console.log(err);
        }
        res.json(restaurant);
    });

});

router.put('/',function(req, res, next){

    var id = req.body.id;

    var data = {

        name : req.body.name,
        contact:req.body.contact,
        email:req.body.email,
        address:req.body.address,
        open:req.body.open,
        end:req.body.end
    };


    Restaurant.updateRestaurant(id, data,function(err,restaurant){
        if (err) {
            console.log(err);
        }

        res.location('/restaurantserver');
        res.redirect('/restaurantserver');
    });


});

module.exports = router;


