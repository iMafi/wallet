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
        }).when('/templates/:id', {
            templateUrl: 'templates/tmpl.html',
            controller: 'TmplController',
            resolve: {
                tmpl: function($route, templatesFactory) {
                    return templatesFactory.getTemplate($route.current.pathParams.id).$promise;
                }
            }
        }).otherwise({
            redirectTo: '/'
        })
    });