'use strict';

/**
 * @ngdoc directive
 * @name yoAngularSandboxApp.directive:ddBootstrapGrid
 * @description
 * # ddBootstrapGrid
 */
angular.module('yoAngularSandboxApp')
  .directive('ddBootstrapGrid', ['stringBuilder', function (stringBuilder) {

		var sb = stringBuilder.getStringBuilder();

    return {
      template: '<div class="dd-bootstrap-grid"></div>',
      restrict: 'E',
			replace: true,
			scope: {
				rows: '='
			},
      link: function postLink(scope, element) {
				element.text('this is the ddBootstrapGrid directive');
				scope.columns = 3;
				for (var i = 0; i < scope.rows ; i = i + 1){
					sb.append('<div class="row">');
					for (var c = 0 ; c < scope.columns; c = c + 1){
						sb.append('<div class="ddbg-col col-md-4">row: ' + i + ', columns: ' + c + '</div>');
					}
					sb.append('</div>');
				}
				element.append(sb.toString());
      }
    };
  }]);
