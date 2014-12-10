/* ExampleObject
 * Provides an example of a JavaScript object.
 *
 * To use the object, create a new instance via one of the following:
 * - using the new keyword if you want to use the default constructor
 *      ex. new ExampleObject()
 * - using Object.create() if you'd like to bypass the default constructor
 *      ex. Object.create(ExampleObject.prototype)
 *
 * Objects can (and should) be used to prevent pollution of the global scope
 * and create more testable code; i.e., instead of creating global
 * variables and functions (or creating variables and functions inside
 * of document.ready), attach them to objects.
 */
function ExampleObject() {

    // if user accidentally omits the new keyword, this will throw an error
    if ( !(this instanceof ExampleObject) ) {
        throw Error("Constructor called as a function. Please use the new keyword or Object.create");
    }

    // Constructor Logic
    this.title = "Tesla S";
    this.topSpeed = 130;
    return this;
}

//Attach functions (i.e. "methods") to the ExampleObject prototype.
ExampleObject.prototype.twoPlusTwo = function() {
    return 4;
}

ExampleObject.prototype.getDescription = function() {
    return this.title + ' - ' + this.topSpeed + 'mph';
}


/* exampleApp
 * Attaching functionality to Angular modules is another
 * way to avoid polluting the global scope.
 */
angular.module('exampleApp', []).
controller('ProductCatalogController', ['$scope', function ($scope) {
    $scope.catalog = {
        laptops: [
            {name: "Inspiron", snippet: "Fast..."},
            {name: "Precision", snippet: "The Next...."},
            {name: "XPS", snippet: "The Next, Next..."}
        ]
    }
}]);
