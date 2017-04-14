/**
 * Created by Administrator on 2017/4/2.
 */
angular.module('manageApp')
    .config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/',{
                template:'<all-activity-page></all-activity-page>'
            })
            .when('/addActivity',{
                template:'<add-activity-page></add-activity-page>'
            })
            .when('/expert',{
                template:'<expert-page></expert-page>'
            })
            .when('/user',{
                template:'<people-page></people-page>'
            })
          
            .otherwise('/');
    }])