'use strict';

describe('Service: stringBuilder', function () {

  // load the service's module
  beforeEach(module('yoAngularSandboxApp'));

  // instantiate service
  var stringBuilder;
  beforeEach(inject(function (_stringBuilder_) {
    stringBuilder = _stringBuilder_;
  }));

  it('should return an empty string with no input', function () {
		var sb = stringBuilder.getStringBuilder();
    expect(sb.toString()).toBe('');
  });

	it('should return an appropriate string with initial input', function () {
		var sb = stringBuilder.getStringBuilder('foo');
    expect(sb.toString()).toBe('foo');
  });
	
	it('should have an append function', function () {
		var sb = stringBuilder.getStringBuilder('foo');
		expect(angular.isFunction(sb.append)).toBe(true);
		sb.append('bar');
    expect(sb.toString()).toBe('foobar');
  });

});
