/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ScrubCharacterPowersCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp.controllers.ScrubCharacterPowersCtrl'));

    var ScrubCharacterPowersCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      ScrubCharacterPowersCtrl = $controller('ScrubCharacterPowersCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(ScrubCharacterPowersCtrl.awesomeThings.length).toBe(3);
    });
  });
});
