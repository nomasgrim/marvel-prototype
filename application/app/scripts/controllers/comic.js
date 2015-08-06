define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name appApp.controller:ComicCtrl
   * @description
   * # ComicCtrl
   * Controller of the appApp
   */
  angular.module('appApp.controllers.ComicCtrl', [])
    .controller('ComicCtrl', function ($scope, $location, comic) {

      var path = $location.path().replace('/comic/','');

      var comicId = path;
      
      comic.getComic(comicId).success(function (response) {
          //Dig into the responde to get the relevant data
          var comic = response.data.results[0];
          $scope.comic = comic;
          console.log('comic data', response.data.results[0]);
      });

    });
});
