'use strict';
angular.module('wallet-monitor').controller('ShopsController', function($scope, shopsFactory) {
    shopsFactory.getAllShops().then(function (response) {
        $scope.shops = response.data.items;
        console.log($scope.shops);
    });
});