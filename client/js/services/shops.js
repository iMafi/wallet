'use strict';
angular.module('wallet-monitor')
    .factory('shopsFactory', function($http) {
        var shops = {};

        shops.getAllShops = function() {
            return $http.get('https://wm.soft-ua.net/api/usershops');
        };

        return shops;
    });