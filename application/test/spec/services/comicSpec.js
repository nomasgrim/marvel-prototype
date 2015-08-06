/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: comic', function () {

    // load the service's module
    beforeEach(module('appApp.services.Comic'));

    // instantiate service
    var comic;
    beforeEach(inject(function (_comic_) {
      comic = _comic_;
    }));

    it('should do something', function () {
      expect(!!comic).toBe(true);
    });

  });
});
