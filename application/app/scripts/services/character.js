define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name appApp.character
   * @description
   * # character
   * Factory in the appApp.
   */
  angular.module('appApp.services.Character', [])
    .factory('character', function ($http) {
      // Service logic
      // ...

      var margelApi = {};

      margelApi.getCharacter = function(characterId) {
        
        var apiKey = '?apikey=133a84db489e55bedd245914e77dee6f';
        var params = characterId + apiKey;
        var baseUrl = 'http://gateway.marvel.com:80/v1/public/characters/';
        var reqUrl = baseUrl + params;
        return $http({
          //method: 'JSONP', 
          url: reqUrl
        });
      };

      return margelApi;
    });
});
