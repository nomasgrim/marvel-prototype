/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/comics.ctrl', 'services/characters']/*deps*/, function (angular, MainCtrl, ComicsCtrl, CharactersService, CharactersFactory)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name appApp
   * @description
   * # appApp
   *
   * Main module of the application.
   */
  return angular
    .module('appApp', ['appApp.controllers.MainCtrl',
'appApp.controllers.ComicsCtrl',
'appApp.services.Characters',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/comicsCtrl', {
          templateUrl: 'views/comics.html',
          controller: 'ComicsCtrl',
          controllerAs: 'comicsCtrl'
        })
        // this needs to be the 2nd to last
        // TODO: fix so it doesn't have to be the 2nd to last
        .when('/:offset', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
