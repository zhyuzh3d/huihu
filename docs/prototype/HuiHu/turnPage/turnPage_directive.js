/**
 * Created by Administrator on 2017/4/4.
 */
angular.module("turnPage")
    .directive("turnPageNum",function () {
        return{
            restrict:"ACE",
            replace:true,
            templateUrl:'../turnPage/turnPage_template.html',
            controller:['$scope','$routeParams','$http','allActivity',function ($scope,$routeParams,$http,allActivity) {
                $scope.dataNum=allActivity.length;
                $scope.pages=Math.ceil($scope.dataNum/3);
                $scope.pageNum=[];
                for(var i=0;i<$scope.pages;i++){
                    $scope.pageNum.push(i);
                }
                $scope.currentPage = 0;                       //设置当前页是 0
                $scope.listsPerPage = 3;

                $scope.setPage = function(num){             // 当点击页码数字时执行的函数
                    $scope.currentPage = num;                 //将当前页 设置为 页码数
                }

                $scope.prevPage = function(){               //点击上一页执行的函数
                    if($scope.currentPage > 0){
                        $scope.currentPage--;
                    }
                }
                $scope.nextPage = function(){              //点击下一页执行的函数
                    if ($scope.currentPage < $scope.pages-1){
                        $scope.currentPage++;
                    }
                }

            }]
        }
    })
