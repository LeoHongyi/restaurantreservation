/**
 * Created by hongyiliu on 11/13/16.
 */
var app = angular.module('RS',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.

        when('/restaurants',{
            templateUrl:'views/restaurants.view.html',
            controller:'restaurantctrl'
        }).
        when('/restaurants/edit/:id',{
            templateUrl:'views/edit_restaurant.view.html',
            controller:'RestaurantEditCtrl'
        }).
        when('/reservations',{
            templateUrl:'views/reservations.view.html',
            controller:'reservationctrl'
        }).
        when('/reservations/details/:id',{
            templateUrl:'views/reservations_details.view.html',
            controller:'ReservationsDetailCtrl'
        }).
        when('/reservations/add',{
            templateUrl:'views/add_reservation.view.html',
            controller:'ReservationsCreateCtrl'
        }).
        when('/reservations/edit/:id',{
            templateUrl:'views/edit_reservation.view.html',
            controller:'ReservationsEditCtrl'
        }).




        when('/logins',{
            templateUrl:'views/login.view.html',
            controller:'loginCtrl'
        }).
        when('/reservationsuser',{
            templateUrl:'views/reservationsuser.view.html',
            controller:'reservationuserctrl'
        }).
        when('/reservationsuser/edit/:id',{
            templateUrl:'views/edit_reservationsuser.view.html',
            controller:'reservationusereditctrl'
        }).
        when('/reservationsuser/add',{
            templateUrl:'views/add_reservationuser.view.html',
            controller:'ReservationsCreateuserCtrl'
        }).
        when('/reservationsuser/assign/:id',{
            templateUrl:'views/assigntable.view.html',
            controller:'tableCtrl'
        }).












        otherwise({redirectTo:'/reservations'})



}]);