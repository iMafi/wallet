'use strict';
angular.module('wallet-monitor')
    .controller('CrtTmplController', function($scope, templatesFactory, $location) {
        $scope.templateData = {
            userId: 1,
            parentId: null,
            dateCreated: '2016-07-21 17:42:39',
            version: 1
        };

        $scope.createNew = function(event) {
            event.preventDefault();
            console.log($scope.templateData);
            templatesFactory.createTemplate($scope.templateData).success(function(data, status) {
                if (status === 200) {
                    $location.path("/templates");
                }
            });
        };
    });