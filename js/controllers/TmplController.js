'use strict';
angular.module('wallet-monitor')
    .controller('TmplController', function($scope, $route, $routeParams, templatesFactory) {
        $scope.tmpl = $route.current.locals.tmpl;
    });