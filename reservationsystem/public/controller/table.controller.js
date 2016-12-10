/**
 * Created by hongyiliu on 11/17/16.  #72888F
 */
angular.module('RS')
    .controller('tableCtrl',['$scope','$http','$routeParams','$location',function ($scope,$http,$routeParams,$location) {

            $http.get('/reservationsever/').success(function(data){
                // alert(data[0].tablenum);

                // if ($scope.reservation.__v == 1) {
                //     $scope.name = "occupied";
                //     $scope.myStyle = {'background-color':'blue'};
                // }
                //alert($scope.reservation.tablenum);


                for (var i = 0; i < data.length; i++) {
                    // alert(data[i].tablenum);
                    if (data[i].tablenum == "1") {
                        $scope.myStyle = {'background-color':'blue'};
                        $scope.name = "occupied";
                    }
                    if (data[i].tablenum == "2") {
                        $scope.myStyle1 = {'background-color':'blue'};
                        $scope.name1 = "occupied";
                    }
                    if (data[i].tablenum == "3") {
                        $scope.myStyle2 = {'background-color':'blue'};
                        $scope.name3 = "occupied";
                    }
                    if (data[i].tablenum == "4") {
                        $scope.myStyle3 = {'background-color':'blue'};
                        $scope.name3 = "occupied";
                    }

                }






            });

            $http.get('/reservationsever/' + $routeParams.id).success(function(data){
                $scope.reservation = data;

                // if ($scope.reservation.__v == 1) {
                //     $scope.name = "occupied";
                //     $scope.myStyle = {'background-color':'blue'};
                // }
                //alert($scope.reservation.tablenum);

                if ($scope.reservation.tablenum == "1") {
                    $scope.myStyle = {'background-color':'blue'};
                    $scope.name = "occupied";
                }
                if ($scope.reservation.tablenum == "2") {
                    $scope.myStyle1 = {'background-color':'blue'};
                    $scope.name1 = "occupied";
                }
                if ($scope.reservation.tablenum == "3") {
                    $scope.myStyle2 = {'background-color':'blue'};
                    $scope.name2 = "occupied";
                }
                if ($scope.reservation.tablenum == "4") {
                    $scope.myStyle3 = {'background-color':'blue'};
                    $scope.name3 = "occupied";
                }




            });

            $scope.table1 = function () {

                alert("you assign table one to"+$scope.reservation.name);


                var data = {
                    id: $routeParams.id,
                    partysize: $scope.reservation.partysize,
                    date: $scope.reservation.date,
                    confirmationcode: $scope.reservation.confirmationcode,
                    name: $scope.reservation.name,
                    phone: $scope.reservation.phone,
                    status:"success",
                    tablenum:"1"

                }



                $http.put('/reservationsever', data).success(function(data, status){
                    console.log(status);

                });
                // $location.path('/reservationsuser');


                $scope.myStyle = {'background-color':'blue'};
                $scope.name = "occupied";

            }


            $scope.table2 = function () {
                // $scope.myStyle={'background-color':'blue'}
                alert("you assign table two to"+$scope.reservation.name);
                var data = {
                    id: $routeParams.id,
                    partysize: $scope.reservation.partysize,
                    date: $scope.reservation.date,
                    confirmationcode: $scope.reservation.confirmationcode,
                    name: $scope.reservation.name,
                    phone: $scope.reservation.phone,
                    status:"success",
                    tablenum:"2"
                }

                $http.put('/reservationsever', data).success(function(data, status){
                    console.log(status);
                });
                //$location.path('/reservationsuser');
                $scope.myStyle1 = {'background-color':'blue'};
                $scope.name1 = "occupied";


                //$location.path('/reservationsuser');
            }

            $scope.table3 = function () {
                // $scope.myStyle={'background-color':'blue'}

                alert("you assign table three to"+$scope.reservation.name);
                var data = {
                    id: $routeParams.id,
                    partysize: $scope.reservation.partysize,
                    date: $scope.reservation.date,
                    confirmationcode: $scope.reservation.confirmationcode,
                    name: $scope.reservation.name,
                    phone: $scope.reservation.phone,
                    status:"success",
                    tablenum:"3"
                }

                $http.put('/reservationsever', data).success(function(data, status){
                    console.log(status);
                });
                $scope.myStyle2 = {'background-color':'blue'};
                $scope.name2 = "occupied";
                //$location.path('/reservationsuser');

                //$location.path('/reservationsuser');
            }

            $scope.table4 = function () {
                // $scope.myStyle={'background-color':'blue'}


                alert("you assign table four to"+$scope.reservation.name);
                var data = {
                    id: $routeParams.id,
                    partysize: $scope.reservation.partysize,
                    date: $scope.reservation.date,
                    confirmationcode: $scope.reservation.confirmationcode,
                    name: $scope.reservation.name,
                    phone: $scope.reservation.phone,
                    status:"success",
                    tablenum:"4"
                }

                $http.put('/reservationsever', data).success(function(data, status){
                    console.log(status);
                });
                $scope.myStyle3 = {'background-color':'blue'};
                $scope.name3 = "occupied";
                //$location.path('/reservationsuser');
                //$location.path('/reservationsuser');
            }




    }])
