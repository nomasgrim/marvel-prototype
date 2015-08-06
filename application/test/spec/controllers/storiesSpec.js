/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: StoriesCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp.controllers.StoriesCtrl'));

    var StoriesCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      StoriesCtrl = $controller('StoriesCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(StoriesCtrl.awesomeThings.length).toBe(3);
    });
  });
});
