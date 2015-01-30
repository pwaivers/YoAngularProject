'use strict';

/**
 * @ngdoc service
 * @name yoAngularSandboxApp.cache
 * @description
 * # cache
 * Factory in the yoAngularSandboxApp.
 */
angular.module('yoAngularSandboxApp')
  .factory('cache', function () {

    // Public API here
    var CacheService = function(){
      var that = this;
			
			that.getCache = function () {
        
      };
			
			that.pushToCache = function () {
				
			};
			
			that.pullFromCache = function () {
				
			};
    };
	
	
	return new CacheService();
	
  });
