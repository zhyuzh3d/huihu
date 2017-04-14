/**
 * Created by Administrator on 2017/4/2.
 */
angular.module("people")
    .directive("peoplePage",function () {
        return{
            restrict:"ACE",
            replace:true,
            // template:"<h3>template普通用户</h3>"
            templateUrl:'../people/people_template.html',
            controller:['$scope','$routeParams','$http',function ($scope,$routeParams,$http){
                $http.get('../data/people.json')
                    .then(function (response) {
                        $scope.user=response.data;

                        $scope.dataNum=$scope.user.length;
                        $scope.pages=Math.ceil($scope.dataNum/3);
                        $scope.pageNum=[];
                        for(var i=0;i<$scope.pages;i++){
                            $scope.pageNum.push(i);
                        }
                        $scope.currentPage = 0;                       //设置当前页是 0
                        $scope.listsPerPage = 3;
                        // $scope.skip=$scope.currentPage+1;

                        $scope.setPage = function(num){             // 当点击页码数字时执行的函数
                            $scope.currentPage = num+1;                 //将当前页 设置为 页码数
                            
                        }

                        $scope.prevPage = function(){               //点击上一页执行的函数
                            if($scope.currentPage > 0){
                                $scope.currentPage--;
                                // $scope.skip=$scope.currentPage+1;
                            }
                        }
                        $scope.nextPage = function(){              //点击下一页执行的函数
                            if ($scope.currentPage < $scope.pages-1){
                                $scope.currentPage++;
                                // $scope.skip=$scope.currentPage+1;
                            }
                        }

                    });



            }]
        }
    })
    .filter('paging',function(){      //paging 过滤器
        return function(lists,start){     //两个参数 lists 是在 html 里你ng-repeat的原始数据：
            //  start 也就是 paging 后面传的参数，即 currentPage*listsPerPage
            return lists.slice(start);     //将原始数据按照 start 分割
        };
    });
