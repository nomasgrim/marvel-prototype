/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: ComicsCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp.controllers.ComicsCtrl'));

    var ComicsCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      ComicsCtrl = $controller('ComicsCtrl', {
        // place here mocked dependencies
      });
    }));

    // it('should attach a list of awesomeThings to the scope', function () {
    //   expect(ComicsCtrl.awesomeThings.length).toBe(3);
    // });
  });
});
