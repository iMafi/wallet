'use strict';

angular.module('wallet-monitor')
    .controller('TemplatesController', function($scope, templatesFactory, $location) {
        $scope.editTemplate = function(id) {
            $location.path('/templates/' + id);
        };

        $scope.deleteTemplate = function(id) {
            templatesFactory.deleteTemplate(id).success(function(data, status) {
                console.log(data, status);
            });
        };

        $scope.createNew = function() {
            $location.path('/createTemplate');
        };

        templatesFactory.getTemplatesList().success(function(data) {
            $scope.templates = data.items;
            console.log($scope.templates);
        });

        //templatesFactory.createTemplate().success(function(data, status, header, config) {
        //    console.log(data);
        //    console.log(status);
        //    console.log(header);
        //    console.log(config);
        //}).error(function(data, status, header, config) {
        //    console.log(data);
        //    console.log(status);
        //    console.log(header);
        //    console.log(config);
        //});
    });
