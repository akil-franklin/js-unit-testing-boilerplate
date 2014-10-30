var app = angular.module('app', ['controllers']);

var Controllers = angular.module('controllers', []);

Controllers.controller('ProductCatalogController', ['$scope', function($scope) {
    $scope.catalog = {
        laptops: [
            {name: "Inspiron", snippet: "Fast..."},
            {name: "Precision", snippet: "The Next...."},
            {name: "XPS", snippet: "The Next, Next..."}
        ]
    }
}]);