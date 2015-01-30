'use strict';

/**
 * @ngdoc service
 * @name yoAngularSandboxApp.cache
 * @description
 * # cache
 * Factory in the yoAngularSandboxApp.
 */
angular.module('yoAngularSandboxApp')
  .service('cache', ['lodash', function (_) {

    var that = this;
		
		var cache = {};
	
		that.getCache = function () { return cache; };
		that.pushToCache = function (obj) {
				_.each(obj, function(key, value) {
					cache[key] = value;
				});
		};
		that.pullFromCache = function () {};
	
  }]);
