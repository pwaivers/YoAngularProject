'use strict';

describe('Directive: waivRepeat', function () {

  // load the directive's module
  beforeEach(module('yoAngularSandboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<div waiv-repeat></div>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('<div></div>');
  }));
});
