angular.module('RS')
    .controller('loginCtrl', ['$scope','$http','$location', function($scope, $http,$location){
        $scope.login = function () {
            // $http.get('/usersever').success(function(data){
            //     $scope.email = data[0].email;
            //
            // });
            var data = {
                email:$scope.email,
                password:$scope.password
            }
            alert($scope.email + $scope.password);

            $http.post('/usersever',data).success(function (data,status) {

                if (data == "success") {

                    $location.path('/reservationsuser');
                } else {
                    $location.path('logins');
                }
            })

        }
    }])