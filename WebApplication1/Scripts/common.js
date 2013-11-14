(function () {
    'use strict';

    // Module name is handy for logging
    var id = 'home_module';

    // Create the module and define its dependencies.
    var home_module = angular.module('home_module', []);
    home_module.constant('yourApp', 'AbtTest');
    home_module.factory('helloWorldService', function () {
        return {
            sayHello: function () {
                return "Hello, World!"
            }
        };
    });
    home_module.controller("homeCtrl", function ($scope, helloWorldService, yourApp) {
        $scope.today = (new Date()).toISOString();
        $scope.message = helloWorldService.sayHello();
        $scope.yourApp = yourApp;
    });
})();