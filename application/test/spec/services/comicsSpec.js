/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: comics', function () {

    // load the service's module
    beforeEach(module('appApp.services.Comics'));

    // instantiate service
    var comics;
    beforeEach(inject(function (_comics_) {
      comics = _comics_;
    }));

    it('should do something', function () {
      expect(!!comics).toBe(true);
    });

  });
});
