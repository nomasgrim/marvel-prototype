/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: InsertStoriesCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp.controllers.InsertStoriesCtrl'));

    var InsertStoriesCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      InsertStoriesCtrl = $controller('InsertStoriesCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(InsertStoriesCtrl.awesomeThings.length).toBe(3);
    });
  });
});
