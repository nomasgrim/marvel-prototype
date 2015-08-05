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
    .controller('MainCtrl', function ($scope, characters) {
      this.awesomeThings = [
        'Cliff',
        'Noah',
        'Ruling'
      ];

      characters.getDrivers().success(function (response) {
          //Dig into the responde to get the relevant data
          $scope.driversList = response.data;
          console.log('here', response.data);
      });

    });
});
