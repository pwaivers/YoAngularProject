'use strict';

/**
 * @ngdoc function
 * @name yoAngularSandboxApp.controller:SandboxCtrl
 * @description
 * # SandboxCtrl
 * Controller of the yoAngularSandboxApp
 */
angular.module('yoAngularSandboxApp')
  .controller('SandboxCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
		$scope.getToThePoint = function(){
			return $scope.awesomeThings.join(' ');
		};
  });
