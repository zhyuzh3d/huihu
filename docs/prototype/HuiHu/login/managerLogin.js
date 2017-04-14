/**
 * Created by Administrator on 2017/4/5.
 */
angular.module('loginApp',[])
    .controller('loginCtrl',['$scope',function ($scope) {
        $scope.data={
            name:'admin',
            pass:'admin'
        }
        
        $scope.submitForm=function () {
            console.log($scope.name+$scope.pass);
            location.href='../manage/index.html';
        }
        
    }])