define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name appApp.characters
   * @description
   * # characters
   * Factory in the appApp.
   */
  angular.module('appApp.services.Characters', [])
    .factory('characters', function ($http) {
      // Service logic
      // ...

      var margelApi = {};

      margelApi.getCharacters = function(offset) {
        var reqUrl;
        var baseUrl = 'http://gateway.marvel.com:80/v1/public/characters?apikey=133a84db489e55bedd245914e77dee6f';
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
