'use strict';

angular.module('wallet-monitor', ['ngRoute'])
    .config(function($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};

        $routeProvider.when('/', {
            templateUrl: 'templates/index.html',
            controller: 'IndexController'
        }).when('/templates', {
            templateUrl: 'templates/templates.html',
            controller: 'TemplatesController'
        }).otherwise({
            redirectTo: '/'
        })
    });