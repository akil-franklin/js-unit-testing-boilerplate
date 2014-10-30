
var expect = chai.expect;


/* Angular Tests */
describe('Angular Tests', function() {

    beforeEach(module('controllers'));

    describe('ProductCatalogController', function() {

        it('Product Catalog controller should create "catalog" model with at least 2 laptops', inject(function($rootScope, $controller) {
            var scope = $rootScope.$new();
            var ctrl = $controller("ProductCatalogController", {$scope: scope});
            expect(scope.catalog.laptops).to.have.length.above(2);
        }));

        it('Catalog model should have at least one laptop called Inspiron', inject(function($rootScope, $controller) {
            var scope = $rootScope.$new();
            var ctrl = $controller("ProductCatalogController", {$scope: scope});
            var catalog = scope.catalog;
            console.log('testValue: ' + $rootScope.testValue);
            expect(catalog.laptops).to.include.something.has.deep.property('name', 'Inspiron');
        }));
    });
});
