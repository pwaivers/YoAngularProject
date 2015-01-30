'use strict';

describe('Directive: ddBootstrapGrid', function () {

  // load the directive's module
  beforeEach(module('yoAngularSandboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dd-bootstrap-grid></dd-bootstrap-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ddBootstrapGrid directive');
  }));
});
