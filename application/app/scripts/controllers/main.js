define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope, characters, $location) {

      var vm = this;
      
      vm.awesomeThings = [
        'Cliff',
        'Noah',
        'Ruling'
      ];

      var path = $location.path().replace('/','');

      if(path === '') {
        path = 0;
      }

      var currentOffset = parseInt(path);
      
      if(currentOffset >= 20) {
        $scope.prevSet = currentOffset - 20;
      }

      $scope.nextSet = currentOffset + 20;      
      
      characters.getCharacters(currentOffset).success(function (response) {
          //Dig into the responde to get the relevant data
          $scope.characterList = response.data.results;
          console.log('here', response.data.results);
      });

    });
});
