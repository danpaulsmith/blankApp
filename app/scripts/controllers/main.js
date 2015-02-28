define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name blankApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the blankApp
   */
  angular.module('blankApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
