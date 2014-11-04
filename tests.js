chai.should(); // enable Chai should syntax
var expect = chai.expect; //convenience variable for Chai expect syntax

/* Generic Tests */
describe('Generic Examples', function() {

    describe('Math Tests', function() {
        it('TwoPlusTwo should equal 4', function() {
            var obj = Object.create(ExampleObject.prototype);
            obj.TwoPlusTwo().should.equal(4);
        });
    });
});


/* Angular Tests */
describe('Angular Examples', function() {

    beforeEach(module('exampleApp'));

    describe('ProductCatalogController', function() {

        it('Product Catalog controller should create "catalog" model with at least 2 laptops', inject(function($rootScope, $controller) {
            //create an empty test scope
            var testScope = $rootScope.$new();
            //Create a new ProductCatalogController with the test scope
            var ctrl = $controller("ProductCatalogController", {$scope: testScope});

            //Ensure that there are at least 2 laptops in the catalog
            expect(testScope.catalog.laptops).to.have.length.above(2);
        }));

        it('Catalog model should have at least one laptop called Inspiron', inject(function($rootScope, $controller) {
            //create an empty test scope
            var testScope = $rootScope.$new();
            //Create a new ProductCatalogController with the test scope
            var ctrl = $controller("ProductCatalogController", {$scope: testScope});

            //Ensure that the catalog has at least one laptop named 'Inspiron'
            var catalog = testScope.catalog; // convenience variable
            expect(catalog.laptops).to.include.something.has.deep.property('name', 'Inspiron');
        }));
    });
});



