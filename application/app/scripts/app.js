/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'services/characters']/*deps*/, function (angular, MainCtrl, AboutCtrl, CharactersService, CharactersFactory)/*invoke*/ {
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
'appApp.controllers.AboutCtrl',
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
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
