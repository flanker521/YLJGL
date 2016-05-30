/**
 * Created by xuwei on 2016/5/30.
 */
define(function (require) {

    var app = require('app');
    var $ = require('jquery');

    app.controller('mainCtrl', ['$scope', function ($scope) {

        $scope.User = "xiaoxiao";
        
        
        $("#leftMenu a.item").on("click",function(){
            $("#leftMenu a.item").each(function(){
                $(this).removeClass("active");
            });
            $(this).addClass("active");
        })
        
        
        
    }])


});