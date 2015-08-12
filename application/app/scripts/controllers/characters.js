define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:CharactersCtrl
   * @description
   * # CharactersCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.CharactersCtrl', [])
    .controller('CharactersCtrl', function ($scope, characters, $location) {

      var vm = this;
      
      vm.awesomeThings = [
        'Comic book Characters'
      ];

      var path = $location.path().replace('/characters','');
      console.log('characters path', path);
      if(path === '') {
        path = 0;
      }else{
        path = path.replace('/','');
      }

      var currentOffset = parseInt(path);
      
      if(currentOffset >= 20) {
        $scope.prevSet = currentOffset - 20;
      }

      $scope.nextSet = currentOffset + 20;      
      $scope.path = path;

      characters.getCharacters(currentOffset).success(function (response) {
          //Dig into the responde to get the relevant data
          $scope.characterList = response.data.results;
          $scope.characterCount = response.data.total;
          console.log('here', response.data);
      });

    });
});
