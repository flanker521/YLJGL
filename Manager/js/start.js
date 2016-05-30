/**
 * Created by xuwei on 2016/5/30.
 */
require.config({
    paths: {
        'angular': '../lib/angular-1.4.0/angular.min',
        'angular-ui-router': '../lib/angular-1.4.0/angular-ui-router.min',
        'angular-async-loader': '../lib/angular-1.4.0/angular-async-loader.min',
        'jquery': '../lib/jquery/jquery-1.9.1.min',
        'semantic': '../lib/semantic-ui/semantic.min'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-ui-router': {deps: ['angular']},
        'semantic': {deps: ['jquery']}
    }
});

require(['angular', 'semantic','main'], function (angular) {

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});