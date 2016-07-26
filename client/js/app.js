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
            templateUrl: 'client/templates/templates/templates.html',
            controller: 'TemplatesController'
        }).when('/createTemplate', {
            templateUrl: 'client/templates/templates/new.html',
            controller: 'CrtTmplController'
        }).when('/templates/:id', {
            templateUrl: 'client/templates/templates/tmpl.html',
            controller: 'TmplController',
            resolve: {
                singleTmpl: function($route, templatesFactory) {
                    return templatesFactory.getTemplate($route.current.params.id);
                }
            }
        }).when('/shops', {
            templateUrl: 'client/templates/shops/shops.html',
            controller: 'ShopsController'
        }).when('/shops/buy', {
            templateUrl: 'client/templates/shops/buy.html'
        }).when('/shops/sell', {
            templateUrl: 'client/templates/shops/sell.html'
        }).when('/shops/account', {
            templateUrl: 'client/templates/shops/account.html'
        }).when('/shops/search', {
            templateUrl: 'client/templates/shops/search.html'
        }).otherwise({
            redirectTo: '/'
        })
    });