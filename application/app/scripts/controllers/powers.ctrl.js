define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:PowersCtrl
   * @description
   * # PowersCtrl
   * Controller of the Powers view
   */
  angular
    .module('appApp.controllers.PowersCtrl')
    .controller('PowersCtrl', PowersCtrl);

  PowersCtrl.$inject = ['$scope'];

  function PowersCtrl () {
    var powersCtrl = this;

    angular.extend(powersCtrl, {
      testeesOne: 'IS THIS THING ON!?'
    });

  }
});

