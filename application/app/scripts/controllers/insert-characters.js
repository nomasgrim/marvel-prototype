define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:InsertCharactersCtrl
   * @description
   * # InsertCharactersCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.InsertCharactersCtrl', [])
    .controller('InsertCharactersCtrl', function (insertCharacters) {

      insertCharacters.postCharacters().success(function (response) {
          //Dig into the responde to get the relevant data
          console.log('posting characters', response);
      });

    });
});
