/**
 * Created by xuwei on 2016/5/30.
 */
/**
 * Created by yijialuo on 2016/3/22.
 */
define(function(require, exports, module) {
    var angular = require('angular');
    var asyncLoader = require('angular-async-loader');
    require('angular-ui-router');
    var app = angular.module('app', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/device");
        $stateProvider
            .state('device', {
                url: "/device",
                views:{
                    'mainView':{
                        templateUrl: 'page/device.html'
                    }
                }
            }).state('calendar',{
            url: "/calendar",
            views:{
                'mainView':{
                    templateUrl: 'page/calendar.html'
                }
            }
        }).state('payment',{
            url: "/payment",
            views:{
                'mainView':{
                    templateUrl: 'page/payment.html'
                }
            }
        })
    });

    // initialze app module for async loader
    asyncLoader.configure(app);
    module.exports = app;

});