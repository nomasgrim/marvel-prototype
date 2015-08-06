define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:ComicsCtrl
   * @description
   * # ComicsCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.ComicsCtrl', [])
    .controller('ComicsCtrl', function ($scope, comicsFactory, $location) {

      var vm = this;
      vm.monster = 'bull';
      var path = $location.path().replace('/comics','');
      console.log('comics path', path);
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
      
      comicsFactory.getComics(currentOffset).success(function (response) {
          //Dig into the responde to get the relevant data
          $scope.comicList = response.data.results;
          console.log('comic list', response.data.results);
      });
    });
});

