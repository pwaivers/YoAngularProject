'use strict';

/**
 * @ngdoc service
 * @name yoAngularSandboxApp.stringBuilder
 * @description
 * # stringBuilder
 * Factory in the yoAngularSandboxApp.
 */
angular.module('yoAngularSandboxApp')
  .factory('stringBuilder', function () {
	
		// Initializes a new instance of the StringBuilder class
		// and appends the given value if supplied
		function StringBuilder(value)
		{
				this.strings = new Array('');
				if (value) {
					this.append(value);
				}
		}
	

		// Appends the given value to the end of this instance.
		StringBuilder.prototype.append = function (value)
		{
				if (value)
				{
						this.strings.push(value);
				}
		};

		// Clears the string buffer
		StringBuilder.prototype.clear = function ()
		{
				this.strings.length = 1;
		};

		// Converts this instance to a String.
		StringBuilder.prototype.toString = function ()
		{
				return this.strings.join('');
		};

    // Public API here
    return {
      getStringBuilder: function (initValue) {
        return new StringBuilder(initValue);
      }
    };
  });
