/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: insertCharacters', function () {

    // load the service's module
    beforeEach(module('appApp.services.InsertCharacters'));

    // instantiate service
    var insertCharacters;
    beforeEach(inject(function (_insertCharacters_) {
      insertCharacters = _insertCharacters_;
    }));

    it('should do something', function () {
      expect(!!insertCharacters).toBe(true);
    });

  });
});
