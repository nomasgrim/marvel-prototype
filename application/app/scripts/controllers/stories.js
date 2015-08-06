define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:StoriesCtrl
   * @description
   * # StoriesCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.StoriesCtrl', [])
    .controller('StoriesCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
