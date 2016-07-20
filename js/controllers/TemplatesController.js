'use strict';

angular.module('wallet-monitor')
    .controller('TemplatesController', function($scope, testFactory) {
        $scope.hello = 'Templates!';

        testFactory.getWeather().success(function(data) {
            console.log(data);
        });
    });
