define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name appApp.comic
   * @description
   * # comic
   * Factory in the appApp.
   */
  angular.module('appApp.services.Comic', [])
    .factory('comic', function ($http) {
      // Service logic
      // ...

      var margelApi = {};

      margelApi.getComic = function(comicId) {
        
        var apiKey = '?apikey=133a84db489e55bedd245914e77dee6f';
        var params = comicId + apiKey;
        var baseUrl = 'http://gateway.marvel.com:80/v1/public/comics/';
        var reqUrl = baseUrl + params;
        return $http({
          //method: 'JSONP', 
          url: reqUrl
        });
      };

      return margelApi;
    });
});
