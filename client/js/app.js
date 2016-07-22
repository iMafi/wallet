'use strict';

angular.module('wallet-monitor', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'client/templates/index.html',
            controller: 'IndexController'
        }).when('/templates', {
            templateUrl: 'client/templates/templates.html'
        }).otherwise({
            redirectTo: '/'
        })
    });