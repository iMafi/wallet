'use strict';
angular.module('wallet-monitor')
    .factory('testFactory', function($http) {
        var test = {};
        test.getWeather = function() {
            return $http({
                url: 'http://api.openweathermap.org/data/2.5/forecast/city?id=698740&APPID=88ed3b8bf8bf8b16a114adb36c02ceea',
                method: 'GET'
            })
        };

        return test;
    });