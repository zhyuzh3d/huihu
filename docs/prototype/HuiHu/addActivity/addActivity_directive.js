/**
 * Created by Administrator on 2017/4/3.
 */

angular.module("addActivity")
    .directive("addActivityPage",function () {
        return{
            restrict:"ACE",
            replace:true,
            templateUrl:"../addActivity/addActivity_template.html"
        }
    })