'use strict';
angular.module('wallet-monitor')
    .controller('TmplController', function($scope, singleTmpl, templatesFactory, $location) {
        $scope.templateData = singleTmpl;

        $scope.updateData = function(event) {
            event.preventDefault();
            console.log($scope.templateData);
            templatesFactory.updateTemplate($scope.templateData).success(function(data, status) {
                if (status === 200) {
                    $location.path("/templates");
                }
            });
        };
    });