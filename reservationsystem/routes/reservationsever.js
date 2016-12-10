var express = require('express');
var router = express.Router();
var Reservation = require('../models/reservation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Reservation.getReservations(function(err,reservations){
    if (err) {
      console.log(err);
    }
    res.json(reservations);

  });

});

router.get('/:id', function(req, res, next) {
  Reservation.getReservationsById(req.params.id,function(err,reservation){
    if (err) {
      console.log(err);
    }
    res.json(reservation);
  });

});




router.post('/',function(req, res, next){

    var date = req.body.date;
    var partysize = req.body.partysize;
    var name = req.body.name;
    var phone = req.body.phone;
    var confirmationcode = req.body.confirmationcode;
    var status = "pending";

    // console.log(date+partysize+name+phone+confirmationcode);
    var newReservation = new Reservation({
        date:date,
        partysize:partysize,
        name:name,
        phone:phone,
        confirmationcode:confirmationcode,
        status:status
    });

    Reservation.createReservation(newReservation,function(err,reservation){
        if (err) {

            console.log(err);
        }

        res.location('/reservationsever');
        res.redirect('/reservationsever');
    });


});


router.put('/',function(req, res, next){
    // var date = req.body.date;
    // var partysize = req.body.partysize;
    var id = req.body.id;
    // var confirmationcode = req.confirmationcode;
    // var phone = req.phone;
    // var name = req.name;
    if (req.body.status != undefined) {
            var status = req.body.status;
    }

    var tablenum = req.body.tablenum;

    console.log(req.body.tablenum);
     var data = {

        date : req.body.date,
        partysize:req.body.partysize,
         confirmationcode:req.body.confirmationcode,
        phone:req.body.phone,
        name:req.body.name,
        status: status,
        tablenum:tablenum

    };


    Reservation.updateReservation(id, data,function(err,reservation){
        if (err) {
            console.log(err);
        }

        res.location('/reservationsever');
        res.redirect('/reservationsever');
    });


});



router.delete('/:id',function(req, res, next){

    var id = req.params.id;
    console.log(id);


    Reservation.removeReservation(id,function(err,reservation){
        if (err) {
            console.log(err);
        }

        //res.location('/reservationsever');
        // res.redirect('/reservations');
        res.send("success");
    });


});

module.exports = router;
