angular.module('RS')

    .controller('restaurantctrl', ['$scope','$http', function($scope, $http){
        $http.get('/restaurantserver').success(function(data){
            $scope.restaurants = data;
        });
    }])


    .controller('RestaurantEditCtrl',['$scope','$http','$routeParams','$location',function($scope,$http,$routeParams,$location) {
        $http.get('/restaurantserver/' + $routeParams.id).success(function(data){
            $scope.restaurant = data;

        });

        $scope.updateRestaurant = function () {
            //alert($routeParams.id + $scope.reservation.partysize + $scope.reservation.date);
            var data = {
                id: $routeParams.id,
                name: $scope.restaurant.name,
                contact: $scope.restaurant.contact,
                email: $scope.restaurant.email,
                address: $scope.restaurant.address,
                open: $scope.restaurant.open,
                end:$scope.restaurant.end
            }

            $http.put('/restaurantserver', data).success(function(data, status){
                console.log(status);
            });

            $location.path('/restaurants');


        }







    }])


