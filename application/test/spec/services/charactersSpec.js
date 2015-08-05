/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: characters', function () {

    // load the service's module
    beforeEach(module('appApp.services.Characters'));

    // instantiate service
    var characters;
    beforeEach(inject(function (_characters_) {
      characters = _characters_;
    }));

    it('should do something', function () {
      expect(!!characters).toBe(true);
    });

  });
});
