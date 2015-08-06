define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name appApp.insertCharacters
   * @description
   * # insertCharacters
   * Factory in the appApp.
   */
  angular.module('appApp.services.InsertCharacters', [])
    .factory('insertCharacters', function ($http) {
      // Service logic
      // ...

      var insertCharacterApi = {};

      insertCharacterApi.postCharacters = function() {
        var baseUrl = 'http://projectmeadowlark.com/php/insert_characters.php?test=alfred';
        return $http({
          url: baseUrl
        });
      };

      return insertCharacterApi;
    });
});
