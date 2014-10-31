var controllers = angular.module('controllers', []);

controllers.controller('ProductCatalogController', ['$scope', function($scope) {
    $scope.catalog = {
        laptops: [
            {name: "Inspiron", snippet: "Fast..."},
            {name: "Precision", snippet: "The Next...."},
            {name: "XPS", snippet: "The Next, Next..."}
        ]
    }
}]);