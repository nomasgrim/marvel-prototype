/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: InsertComicsCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp.controllers.InsertComicsCtrl'));

    var InsertComicsCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      InsertComicsCtrl = $controller('InsertComicsCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(InsertComicsCtrl.awesomeThings.length).toBe(3);
    });
  });
});
