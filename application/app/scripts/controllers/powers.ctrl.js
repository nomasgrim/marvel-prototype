define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:PowersCtrl
   * @description
   * # PowersCtrl
   * Controller of the Powers
   */
  
  angular
    .module('appApp.controllers.PowersCtrl', [])
    .controller('PowersCtrl', PowersCtrl);

  /*
   * @ngInject
   */

  function PowersCtrl ($q, $scope, characters) {
    var powersCtrl = this;

    angular.extend(powersCtrl, {
      testeesOne: 'IS THIS THING ON!?'
    });

    var currentOffset = 1;

    var promise = characters.getCharacters(currentOffset);
    promise
      .success(getPowers);

    function getPowers (response) {
      powersCtrl.characterList = response.data.results;

      angular.forEach(powersCtrl.characterList, getWikiContent);
    }

    function getWikiContent (character, index, array) {
console.log('getWikiContent', character, index, array);
    }

  }
});

