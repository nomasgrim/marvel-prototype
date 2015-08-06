define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:EventsCtrl
   * @description
   * # EventsCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.EventsCtrl', [])
    .controller('EventsCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
