'use strict';
angular.module('wallet-monitor')
    .factory('templatesFactory', function($http) {
        var templates = {};

        templates.getTemplatesList = function() {
            return $http.get("https://wm.soft-ua.net/api/tmpl/list?userid=1");
        };

        templates.getTemplate = function(id) {
            return $http.get('https://wm.soft-ua.net/api/tmpl/load/' + id).then(function (response) {
                return response.data;
            });
        };

        templates.createTemplate = function(createData) {
            return $http.post('https://wm.soft-ua.net/api/tmpl/new', createData);
        };

        templates.updateTemplate = function(updateData) {
            return $http.post('https://wm.soft-ua.net/api/tmpl/update/' + updateData.id, updateData);
        };

        templates.deleteTemplate = function(id) {
            return $http.post('https://wm.soft-ua.net/api/tmpl/delete', {id: id});
        };

        return templates;
    });