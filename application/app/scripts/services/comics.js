define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name appApp.comics
   * @description
   * # comics
   * Factory in the appApp.
   */
  angular.module('appApp.services.Comics', [])
    .factory('comicsFactory', function ($http) {
      // Service logic
      // ...

      var margelApi = {};

      margelApi.getComics = function(offset) {
        var reqUrl;
        var baseUrl = 'http://gateway.marvel.com:80/v1/public/comics?apikey=133a84db489e55bedd245914e77dee6f';
        if(offset) {
          reqUrl = baseUrl + '&offset=' + offset;
        }else{
          reqUrl = baseUrl;
        }
        return $http({
          //method: 'JSONP', 
          url: reqUrl
        });
      };

      return margelApi;
    });
});
