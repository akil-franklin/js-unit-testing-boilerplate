var MOCHA_LAB = (function Main() {

    function TwoPlusTwo() {
        return 4;
    }

    //Create an angular module that we'll attach controllers to
    var controllers = angular.module('controllers', []);
    //attach the ProduceCatalogController to the controllers module
    controllers.controller('ProductCatalogController', ['$scope', function ($scope) {
        $scope.catalog = {
            laptops: [
                {name: "Inspiron", snippet: "Fast..."},
                {name: "Precision", snippet: "The Next...."},
                {name: "XPS", snippet: "The Next, Next..."}
            ]
        }
    }]);

    //Construct the mochaLab object and return it
    var mochaLab = {};
    mochaLab.TwoPlusTwo = TwoPlusTwo;
    return mochaLab;

})();

