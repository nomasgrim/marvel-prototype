define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function () {
      this.awesomeThings = [
        'rulers of the world',
        'output from controller',
        'better be working dammit'
      ];
    });
});
