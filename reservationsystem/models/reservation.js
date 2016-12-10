/**
 * Created by hongyiliu on 11/12/16.
 */
var mongoose = require('mongoose');

var reservationSchema = mongoose.Schema({
    date: {
        type:String,
        require:true
    },
    partysize: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true
    },
    phone: {
        type:String,
        require:true
    },
    confirmationcode: {
        type:String,
        require:true
    },
    status: {
        type:String,
        require:true
    },
    tablenum:{
        type:String,
        require:true
    }




});

var Reservation = module.exports = mongoose.model('Reservation',reservationSchema);

module.exports.getReservations = function(callback){
    Reservation.find(callback);
}

module.exports.getReservationsById = function(id, callback){
    Reservation.findById(id, callback);
}



module.exports.createReservation = function(newReservation, callback){
    newReservation.save(callback);
}





module.exports.updateReservation = function(id, data,callback) {
    var date = data.date;
    var partysize = data.partysize;
    var name = data.name;
    var phone = data.phone;
    var confirmationcode = data.confirmationcode;
    if (data.status != undefined) {
        var status = data.status;
    }

        var tablenum = data.tablenum;


    var query = {_id : id};

    Reservation.findById(id, function(err, reservation){
        if (!reservation) {
            return next(new Error('could not load reservation'));
        } else {
            reservation.date = date;
            reservation.partysize = partysize;
            reservation.name = name;
            reservation.phone = phone;
            reservation.confirmationcode = confirmationcode;
            reservation.tablenum = tablenum;
            if (reservation.status != undefined) {
                reservation.status = status;
            }
            reservation.tablenum = tablenum
            reservation.save(callback);
        }
    });
}

module.exports.removeReservation = function(id, callback) {
    Reservation.find({_id: id}).remove(callback);
}


