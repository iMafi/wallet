'use strict';
angular.module('wallet-monitor')
    .factory('templatesFactory', function($http) {
        var templates = {};

        templates.getTemplatesList = function() {
            return $http.get("/wallet/wallet/api/tmpl/list");
        };

        templates.getTemplate = function(id) {
            return $http.get('https://wm.soft-ua.net/api/tmpl/load/' + id);
        };

        /*templates.createTemplate = function() {
            var data = JSON.stringify({
                name: 'From Angular',             // string, required
                description: 'Test Template from AngularJS',            // string, required
                dateCreated: '9999-12-31',      // date
                parentId: null,                   // number, required
                version: 1,                     // number, required, default 1
                templateText: 'big html text'  // string
            });
            return $http.post("https://wm.soft-ua.net/api/tmpl/new", data);
        };*/

        return templates;
    });