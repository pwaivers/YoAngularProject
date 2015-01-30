'use strict';

describe('Service: cache', function () {

  // load the service's module
  beforeEach(module('yoAngularSandboxApp'));

  // instantiate service
  var cache;
  beforeEach(inject(function (_cache_) {
    cache = _cache_;
  }));

  it('have the specified inteface', function () {
    expect(angular.isFunction(cache.getCache).toBe(true));
    expect(angular.isFunction(cache.pushToCache).toBe(true));
    expect(angular.isFunction(cache.pullFromCache).toBe(true));
  });

});
