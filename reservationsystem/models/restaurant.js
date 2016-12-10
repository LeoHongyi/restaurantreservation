/**
 * Created by hongyiliu on 11/15/16.
 */
var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
        name:{
            type:String,
            require:true
        },
        contact:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        address:{
            type:String,
            require:true
        },
        open: {
            type:String,
            require:true
        },
        end: {
            type:String,
            require:true
        }



});
var Restaurant = module.exports = mongoose.model('Restaurant',restaurantSchema);
module.exports.getRestaurants = function(callback){
    Restaurant.find(callback);
}

module.exports.getRestaurantById = function(id, callback){
    Restaurant.findById(id, callback);
}



module.exports.updateRestaurant = function(id, data,callback) {
    var name = data.name;
    var contact = data.contact;
    var email = data.email;
    var address = data.address;
    var open = data.open;
    var end = data.end;

    var query = {_id : id};

    Restaurant.findById(id, function(err, restaurant){
        if (!restaurant) {
            return next(new Error('could not load reservation'));
        } else {
            restaurant.name = name;
            restaurant.contact = contact;
            restaurant.email = email;
            restaurant.address = address;
            restaurant.open = open;
            restaurant.end = end;
            restaurant.save(callback);
        }
    });
}


