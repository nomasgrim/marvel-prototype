/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: character', function () {

    // load the service's module
    beforeEach(module('appApp.services.Character'));

    // instantiate service
    var character;
    beforeEach(inject(function (_character_) {
      character = _character_;
    }));

    it('should do something', function () {
      expect(!!character).toBe(true);
    });

  });
});
