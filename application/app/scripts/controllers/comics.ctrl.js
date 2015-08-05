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
    .controller('ComicsCtrl', function () {
      this.awesomeThings = [
        'rulers of the world',
        'output from controller',
        'better be working dammit'
      ];
    });
});

