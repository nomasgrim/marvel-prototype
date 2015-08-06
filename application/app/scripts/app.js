/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/comics', 'services/characters', 'services/comics', 'services/insert-characters', 'controllers/insert-characters', 'controllers/events', 'controllers/stories', 'controllers/insert-comics', 'controllers/insert-stories', 'controllers/insert-events', 'controllers/scrub-character-powers']/*deps*/, 
  function (angular, MainCtrl, ComicsCtrl, CharactersService, ComicsService, InsertCharactersFactory, InsertCharactersCtrl, EventsCtrl, StoriesCtrl, InsertComicsCtrl, InsertStoriesCtrl, InsertEventsCtrl, ScrubCharacterPowersCtrl)/*invoke*/ {
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
'appApp.services.Comics',
'appApp.services.Characters',
'appApp.services.InsertCharacters',
'appApp.controllers.InsertCharactersCtrl',
'appApp.controllers.EventsCtrl',
'appApp.controllers.StoriesCtrl',
'appApp.controllers.InsertComicsCtrl',
'appApp.controllers.InsertStoriesCtrl',
'appApp.controllers.InsertEventsCtrl',
'appApp.controllers.ScrubCharacterPowersCtrl',
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
        .when('/comics', {
          templateUrl: 'views/comics.html',
          controller: 'ComicsCtrl',
          controllerAs: 'comicsCtrl'
        })
        .when('/comics/:offset', {
          templateUrl: 'views/comics.html',
          controller: 'ComicsCtrl',
          controllerAs: 'comicsCtrl'
        })
        .when('/insert-characters', {
          templateUrl: 'views/insert-characters.html',
          controller: 'InsertCharactersCtrl',
          controllerAs: 'insertCharactersCtrl'
        })
        .when('/events', {
          templateUrl: 'views/events.html',
          controller: 'EventsCtrl',
          controllerAs: 'events'
        })
        .when('/stories', {
          templateUrl: 'views/stories.html',
          controller: 'StoriesCtrl',
          controllerAs: 'stories'
        })
        // this needs to be the 2nd to last
        // TODO: fix so it doesn't have to be the 2nd to last
        .when('/:offset', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/insert-comics', {
          templateUrl: 'views/insert-comics.html',
          controller: 'InsertComicsCtrl',
          controllerAs: 'insertComics'
        })
        .when('/insert-stories', {
          templateUrl: 'views/insert-stories.html',
          controller: 'InsertStoriesCtrl',
          controllerAs: 'insertStories'
        })
        .when('/insert-events', {
          templateUrl: 'views/insert-events.html',
          controller: 'InsertEventsCtrl',
          controllerAs: 'insertEvents'
        })
        .when('/scrub-character-powers', {
          templateUrl: 'views/scrub-character-powers.html',
          controller: 'ScrubCharacterPowersCtrl',
          controllerAs: 'scrubCharacterPowers'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
