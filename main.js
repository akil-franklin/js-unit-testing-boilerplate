/* ExampleObject
 * Provides an example of a JavaScript object.
 *
 * To use the object, create a new instance using Object.create()
 * ex. Object.create(ExampleObject.prototype)
 *
 * Objects can (and should) be used to prevent pollution of the global scope
 * and create more testable code; i.e., instead of creating global
 * variables and functions, attach them to objects.
 *
 */
function ExampleObject() {
    this.title = "Dell";
    return this;
}

//Attach functions (i.e. "methods") to the MochaLab object prototype.
ExampleObject.prototype.TwoPlusTwo = function() {
    return 4;
}


/* exampleApp
 * Attaching functionality to Angular modules is another
 * way to avoid polluting the global scope.
 */
var exampleApp = angular.module('exampleApp', []);

//Attach the ProductCatalogController to the boilerplateApp
exampleApp.controller('ProductCatalogController', ['$scope', function ($scope) {
    $scope.catalog = {
        laptops: [
            {name: "Inspiron", snippet: "Fast..."},
            {name: "Precision", snippet: "The Next...."},
            {name: "XPS", snippet: "The Next, Next..."}
        ]
    }
}]);



/* Mozilla Object.create() Polyfill
 * Used to add Object.create() support for older
 * browsers like IE8
 * More Info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */
if (typeof Object.create != 'function') {
    Object.create = (function() {
        var Object = function() {};
        return function (prototype) {
            if (arguments.length > 1) {
                throw Error('Second argument not supported');
            }
            if (typeof prototype != 'object') {
                throw TypeError('Argument must be an object');
            }
            Object.prototype = prototype;
            var result = new Object();
            Object.prototype = null;
            return result;
        };
    })();
}