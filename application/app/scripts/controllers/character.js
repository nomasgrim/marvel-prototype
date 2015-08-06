define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:CharacterCtrl
   * @description
   * # CharacterCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.CharacterCtrl', [])
    .controller('CharacterCtrl', function ($scope, $location, character) {


      var path = $location.path().replace('/character/','');

      var characterId = path;
      
      character.getCharacter(characterId).success(function (response) {
          //Dig into the responde to get the relevant data
          var character = response.data.results[0];
          $scope.character = character;
          console.log('character data', response.data.results[0]);
      });

    });
});
