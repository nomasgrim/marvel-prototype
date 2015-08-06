/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: InsertEventsCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp.controllers.InsertEventsCtrl'));

    var InsertEventsCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      InsertEventsCtrl = $controller('InsertEventsCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(InsertEventsCtrl.awesomeThings.length).toBe(3);
    });
  });
});
