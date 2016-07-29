'use strict';
angular.module('wallet-monitor').directive('shopsNavigation', function() {
   return {
       restrict: 'E',
       scope: {
           active: '='
       },
       templateUrl: 'client/templates/directives/shops/shopsnavigation.html'
   }
});