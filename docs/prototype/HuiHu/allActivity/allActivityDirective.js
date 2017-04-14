/**
 * Created by Administrator on 2017/4/2.
 */
angular.module('allActivity')
    .directive('allActivityPage',function () {
        return{
            restrict:'ACE',
            replace:true,
            templateUrl:'../allActivity/allActivityTemplate.html',
            controller:['$scope','$routeParams','$http',function ($scope,$routeParams,$http){
                $http.get('../data/allActivity.json')
                    .then(function (response) {
                        $scope.allActivity=response.data;
                    })
                $scope.edit=function (item) {
                    alert(item);
                    location.href="../edit/edit.html?"+"txt="+encodeURI(item);

                }
            }]
            // controller:'outCtrl'
        }
    })

/*
.controller('outCtrl',['$scope','$routeParams','$http',function ($scope,$routeParams,$http){
    $http.get('../data/allActivity.json')
        .then(function (response) {
            $scope.allActivity=response.data;
        })
}])*/
