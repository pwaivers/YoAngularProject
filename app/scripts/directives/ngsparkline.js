'use strict';

/**
 * @ngdoc directive
 * @name yoAngularSandboxApp.directive:ngSparkline
 * @description
 * # ngSparkline
 */
angular.module('yoAngularSandboxApp')
  .directive('ngSparkline', function () {
    return {
      restrict: 'A',
			require: '^ngModel',
			template: '<div class="sparkline"><h4>Weather for {{ngModel}}</h4></div>'
    };
  });
