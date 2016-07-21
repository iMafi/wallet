'use strict';

angular.module('wallet-monitor')
    .controller('TemplatesController', function($scope, templatesFactory) {
        $scope.hello = 'Templates!';

        //templatesFactory.getTemplatesList().success(function(data) {
        //    console.log(data);
        //});

        templatesFactory.createTemplate().success(function(data, status, header, config) {
            console.log(data);
            console.log(status);
            console.log(header);
            console.log(config);
        }).error(function(data, status, header, config) {
            console.log(data);
            console.log(status);
            console.log(header);
            console.log(config);
        });
    });
