/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: InsertCharactersCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp.controllers.InsertCharactersCtrl'));

    var InsertCharactersCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      InsertCharactersCtrl = $controller('InsertCharactersCtrl', {
        // place here mocked dependencies
      });
    }));

    // it('should attach a list of awesomeThings to the scope', function () {
    //   expect(InsertCharactersCtrl.awesomeThings.length).toBe(3);
    // });
  });
});
