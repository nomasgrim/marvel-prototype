/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: EventsCtrl', function () {

    // load the controller's module
    beforeEach(module('appApp.controllers.EventsCtrl'));

    var EventsCtrl;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      EventsCtrl = $controller('EventsCtrl', {
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(EventsCtrl.awesomeThings.length).toBe(3);
    });
  });
});
