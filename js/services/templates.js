'use strict';
angular.module('wallet-monitor')
    .factory('templatesFactory', function($http) {
        var templates = {};

        templates.getTemplatesList = function() {
            return $http.get("https://wm.soft-ua.net/api/tmpl/list?userid=11");
        };

        templates.createTemplate = function() {
            return $http.post("https://wm.soft-ua.net/api/tmpl/new", {
                name: 'From Angular',             // string, required
                description: 'Test Template from AngularJS',            // string, required
                dateCreated: '9999-12-31',      // date
                parentId: null,                   // number, required
                version: 1,                     // number, required, default 1
                templateText: 'big html text'  // string
            });
            //return $http({
            //    headers: {
            //        'Content-Type': 'application/json',
            //        'Access-Control-Allow-Headers': 'X-Requested-With, content-type',
            //        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
            //    },
            //    method: 'POST',
            //    url: "https://wm.soft-ua.net/api/tmpl/new",
            //    data: {
            //        name: 'From Angular',             // string, required
            //        description: 'Test Template from AngularJS',            // string, required
            //        dateCreated: '9999-12-31',      // date
            //        parentId: null,                   // number, required
            //        version: 1,                     // number, required, default 1
            //        templateText: 'big html text'  // string
            //    }
            //});
        };

        return templates;
    });