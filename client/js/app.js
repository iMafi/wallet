'use strict';

angular.module('wallet-monitor', ['ngRoute'])
    .config(function($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.common = {};
        //$httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};

        $routeProvider.when('/', {
            templateUrl: 'client/templates/index.html',
            controller: 'IndexController'
        }).when('/templates', {
            templateUrl: 'client/templates/templates.html',
            controller: 'TemplatesController'
        }).when('/createTemplate', {
            templateUrl: 'client/templates/new.html',
            controller: 'CrtTmplController'
        }).when('/templates/:id', {
            templateUrl: 'client/templates/tmpl.html',
            controller: 'TmplController',
            resolve: {
                singleTmpl: function($route, templatesFactory) {
                    return templatesFactory.getTemplate($route.current.params.id);
                }
            }
        }).when('/shops', {
            templateUrl: 'client/templates/shops.html',
            controller: 'ShopsController'
        }).otherwise({
            redirectTo: '/'
        })
    });