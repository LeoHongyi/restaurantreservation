angular.module('RS')

    .controller('reservationuserctrl', ['$scope','$http','$routeParams','$location', function($scope, $http,$routeParams,$location){
        $http.get('/reservationsever').success(function(data){
            $scope.reservations = data;
        });

        $scope.remove = function (idx) {
            $http.delete('/reservationsever/' + idx).success(function(data){
                alert(data);

               $scope.reservation = data;


            });
            $location.path('/reservationsuser');
        }



    }])

    .controller('reservationctrl', ['$scope','$http', function($scope, $http){
        $scope.search = "";
        $http.get('/reservationsever').success(function(data){
            $scope.reservations = data;

        });

        $scope.sensitiveSearch = function(reservation) {
            if ($scope.search) {
                return reservation.name.indexOf($scope.search) == 0 ||
                    reservation.phone.indexOf($scope.search) == 0;
            }
            return true;
        };

    }])

    .controller('ReservationsDetailCtrl',['$scope','$http','$routeParams','$location',function($scope, $http,$routeParams,$location){



            $http.get('/reservationsever/' + $routeParams.id).success(function(data){

                $scope.reservation = data;

            });

        $scope.removeReservation = function () {
            $http.delete('/reservationsever/' + $routeParams.id).success(function(data){

                $scope.reservation = data;

            });
            $location.path('/reservations');
        }





    }])

    .controller('ReservationsCreateCtrl', ['$scope','$http','$routeParams','$location',function($scope, $http,$routeParams,$location){

        var confirmationcode =  Math.floor(Math.random()*9000) + 1000;

        setTimeout(function a() {$scope.confirmationcode = confirmationcode;},4000);
        $scope.addReservation = function() {

           //  alert(confirmationcode);
            var data = {
                name : $scope.name,
                partysize : $scope.partysize,
                date: $scope.date,
                phone:$scope.telephonenumber,
                confirmationcode:$scope.confirmationcode

            }
            $http.post('/reservationsever',data).success(function(data, status){
                console.log(data);
                // console.log(status);
            });
            $location.path('/reservations');


        }

    }])

    .controller('ReservationsEditCtrl',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location) {
            $http.get('/reservationsever/' + $routeParams.id).success(function(data){
                    $scope.reservation = data;

            });

            $scope.updateReservation = function () {
                //alert($routeParams.id + $scope.reservation.partysize + $scope.reservation.date);
                var data = {
                    id: $routeParams.id,
                    partysize: $scope.reservation.partysize,
                    date: $scope.reservation.date,
                    confirmationcode: $scope.reservation.confirmationcode,
                    name: $scope.reservation.name,
                    phone: $scope.reservation.phone
                }

                $http.put('/reservationsever', data).success(function(data, status){
                    console.log(status);
                });

                $location.path('/reservations');
            }





    }])



    .controller('reservationusereditctrl',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location) {


        
        $http.get('/reservationsever/' + $routeParams.id).success(function(data){
            $scope.reservation = data;

        });



        $scope.updateReservation = function () {
            //alert($routeParams.id + $scope.reservation.partysize + $scope.reservation.date);
            var data = {
                id: $routeParams.id,
                partysize: $scope.reservation.partysize,
                date: $scope.reservation.date,
                confirmationcode: $scope.reservation.confirmationcode,
                name: $scope.reservation.name,
                phone: $scope.reservation.phone
            }

            $http.put('/reservationsever', data).success(function(data, status){
                console.log(status);
            });

            $location.path('/reservationsuser');


        };
        
        







    }])



    .controller('ReservationsCreateuserCtrl', ['$scope','$http','$routeParams','$location',function($scope, $http,$routeParams,$location){


        $scope.addReservation = function() {

            //  alert(confirmationcode);
            var data = {
                name : $scope.name,
                partysize : $scope.partysize,
                date: $scope.date,
                phone:$scope.telephonenumber,
                confirmationcode:$scope.confirmationcode

            }
            $http.post('/reservationsever',data).success(function(data, status){
                console.log(data);
                // console.log(status);
            });
            $location.path('/reservationsuser');


        }

    }])










