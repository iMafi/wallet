'use strict';

angular.module('wallet-monitor', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/index.html',
            controller: 'IndexController'
        }).when('/templates', {
            template: 'Templates View'
        }).otherwise({
            redirectTo: '/'
        })
    });