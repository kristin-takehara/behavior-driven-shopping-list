//jshint esversion: 6

const expect = chai.expect;
const should = chai.should();


describe('ShoppingListItem', function() {
    let sl = new ShoppingListItem("name", "description");

  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  // it("should have a property name", function() {
  //   expect(sl).to.have.property("name");
  // });





});