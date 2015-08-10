/*jshint unused: vars */
define([
    'angular', 
    'controllers/main', 
    'controllers/comics',
    'controllers/powers',
    'services/characters', 
    'services/comics', 
    'services/insert-characters', 
    'controllers/insert-characters', 
    'controllers/events', 
    'controllers/stories', 
    'controllers/insert-comics', 
    'controllers/insert-stories', 
    'controllers/insert-events', 
    'controllers/scrub-character-powers', 
    'controllers/character', 
    'services/character', 
    'controllers/comic', 
    'services/comic']/*deps*/, 
  function (angular, MainCtrl, ComicsCtrl, PowersCtrl, CharactersService, ComicsService, InsertCharactersFactory, InsertCharactersCtrl, EventsCtrl, StoriesCtrl, InsertComicsCtrl, InsertStoriesCtrl, InsertEventsCtrl, ScrubCharacterPowersCtrl, CharacterCtrl, CharacterFactory, ComicCtrl, ComicFactory)/*invoke*/ {
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
    'appApp.services.Comic',
    'appApp.services.Comics',
    'appApp.controllers.Powers',
    'appApp.services.Character',
    'appApp.services.Characters',
    'appApp.services.InsertCharacters',
    'appApp.controllers.InsertCharactersCtrl',
    'appApp.controllers.EventsCtrl',
    'appApp.controllers.StoriesCtrl',
    'appApp.controllers.InsertComicsCtrl',
    'appApp.controllers.InsertStoriesCtrl',
    'appApp.controllers.InsertEventsCtrl',
    'appApp.controllers.ScrubCharacterPowersCtrl',
    'appApp.controllers.CharacterCtrl',
    'appApp.controllers.ComicCtrl',
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
        .when('/character/:characterId', {
          templateUrl: 'views/character.html',
          controller: 'CharacterCtrl',
          controllerAs: 'character'
        })
        .when('/comic/:comicId', {
          templateUrl: 'views/comic.html',
          controller: 'ComicCtrl',
          controllerAs: 'comic'
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
        .when('/powers', {
          templateUrl: 'views/powers.html',
          controller: 'PowersCtrl',
          controllerAs: 'powersCtrl'
        })
        .when('/stories', {
          templateUrl: 'views/stories.html',
          controller: 'StoriesCtrl',
          controllerAs: 'stories'
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
        // this needs to be the 2nd to last if it's not, shit breaks
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
