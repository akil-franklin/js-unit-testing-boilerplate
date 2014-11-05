chai.should(); // enable Chai should syntax
var expect = chai.expect; //convenience variable for Chai expect syntax

/* Generic Tests */
describe('Generic Examples', function() {

    describe('Example Object Tests', function() {

        it('TwoPlusTwo should equal 4', function() {
            var obj = new ExampleObject();
            obj.twoPlusTwo().should.equal(4);
        });

        it('ExampleObject is created properly', function() {
            var obj = new ExampleObject();
            obj.should.have.property('title');
            obj.should.have.property('topSpeed');
        });

        it('Description contains title and top speed', function() {
            var obj = new ExampleObject();
            var description = obj.getDescription();
            description.should.contain(obj.title);
            description.should.contain(obj.topSpeed);
            console.log(description);
        });


        it('Forgetting the new keyword with ExampleObject should throw an error', function() {
            // If a developer makes a mistake and calls the ExampleObject constructor without
            // the new keyword, an error should be thrown.
            expect(ExampleObject.bind()).to.throw();
        });
    });
});


/* Angular Tests */
describe('Angular Examples', function() {

    //Create a new exampleApp angular module before each test
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



