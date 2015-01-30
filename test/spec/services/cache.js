'use strict';

describe('Service: cache', function () {

  // load the service's module
  beforeEach(module('yoAngularSandboxApp'));

  // instantiate service
  var cache;
  beforeEach(inject(function (_cache_) {
    cache = _cache_;
  }));

  it('have the specified interface', function () {
    expect(angular.isFunction(cache.getCache)).toBe(true);
    expect(angular.isFunction(cache.pushToCache)).toBe(true);
    expect(angular.isFunction(cache.pullFromCache)).toBe(true);
  });

	describe('Function: getCache', function(){
		it ('should return an object', function(){
			var myCache = cache.getCache();
			expect(angular.isObject(myCache)).toBe(true);
		});
	});
	
	describe('Function: pushToCache', function(){
		var inObject = {};
		
		beforeEach(function() {
			inObject = 
			{
				fname: 'Patrick',
				lname: 'Waivers',
				age: 24
			};
		});
		
		var expectedCache = 
			{
				fname: 'Patrick',
				lname: 'Waivers',
				age: 24
			};
							 
		
		it ('should return an object', function(){
			
			cache.pushToCache(inObject);
			var myCache = cache.getCache();
			expect(myCache).toEqual(expectedCache);
		});
	});
});


