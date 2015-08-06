define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:InsertStoriesCtrl
   * @description
   * # InsertStoriesCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.InsertStoriesCtrl', [])
    .controller('InsertStoriesCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
