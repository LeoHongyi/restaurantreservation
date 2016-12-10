/**
 * Created by hongyiliu on 11/15/16.
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    }


});
var User = module.exports = mongoose.model('User',userSchema);
module.exports.getUsers = function(user,callback){

    User.find({email:user.email,password:user.password},callback);
}