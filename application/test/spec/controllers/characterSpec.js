/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: CharacterCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp.controllers.CharacterCtrl'));

    var CharacterCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      CharacterCtrl = $controller('CharacterCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(CharacterCtrl.awesomeThings.length).toBe(3);
    });
  });
});
