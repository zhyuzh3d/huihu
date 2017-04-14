/**
 * Created by Administrator on 2017/4/2.
 */
angular.module("expert")
    .directive("expertPage",function () {
        return{
            restrict:"ACE",
            replace:true,
            templateUrl:"../expert/expert_template.html",
            controller:['$scope','$routeParams','$http',function ($scope,$routeParams,$http){
                $http.get('../data/expert.json')
                    .then(function (response) {
                        $scope.expert=response.data;
                    })
                $scope.check1=false;
                $scope.flag=false;


                $scope.isClick=function (n) {

                 /*   if($scope.check1==false){
                        $scope.check1=true;
                    }else {
                        $scope.check1=false;
                    }
*/
                }
            }]
        }
    })