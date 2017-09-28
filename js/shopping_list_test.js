//jshint esversion: 6

const expect = chai.expect;
const should = chai.should();

//is a function
describe('ShoppingListItem', function() {
    let sl = new ShoppingListItem("name", "description");

  it('Is a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });
});

//has property 'name'
describe('ShoppingListItem', function() {
    let sl = new ShoppingListItem("name", "description");

  it("Has a property named 'name'", function() {
    expect(sl).to.have.property("name");
  });
});

//has a property named 'description'
describe('ShoppingListItem', function() {
    let sl = new ShoppingListItem("name", "description");
  it("Has a property named 'description", function() {
    expect(sl).to.have.property("description");
  });
});

//has a property named 'is_done'
describe('ShoppingListItem', function() {
  let sl = new ShoppingListItem("name", "description");
  it("Has a property named description", function() {
    expect(sl).to.have.property("is_done");
  });
});

//has a constructor method that accepts 2 arguments 'name' and 'description'
describe('ShoppingListItem', function() {
  let sl = new ShoppingListItem("name", "description");
  it("Has a constructor method that accepts two arguments, 'name'  and 'description'", function() {
    expect(sl).to.have.constructor("name", "description");
  });
});

//Has a method named 'check'
describe('ShoppingListItem', function() {
  let sl = new ShoppingListItem("name", "description");
  it("Has a method named 'check'", function() {
    expect(sl.check).to.be.a("function");
  });
});

//When the instance's 'check' method is called, will set its 'is_done' property to be TRUE
describe('ShoppingListItem', function() {
  let sl = new ShoppingListItem("name", "description");
  it("When the instance's 'check' method is called, will set its 'is_done' property to be TRUE", function() {
    sl.check(); //invokes the work
    expect(sl.is_done).to.be.true;
  }); //should be set to be true
});

//Has a method named 'uncheck'
describe('ShoppingListItem', function() {
  let sl = new ShoppingListItem("name", "description");
  it("Has a method called 'uncheck'", function() {
    expect(sl.uncheck).to.be.a('function');
  });
});

//When the instance's 'uncheck' method is called, will set its 'is_done' property to be FALSE
describe('ShoppingListItem', function() {
  let sl = new ShoppingListItem("name", "description");
  it("When the instance's 'uncheck' method is called, will set it's 'is_done' property to be FALSE", function() {
    sl.uncheck();//invokes the work
    expect(sl.is_done).to.be.false;
  });
});

//Has a method named 'render'
describe('ShoppingListItem', function() {
  let sl = new ShoppingListItem("name", "description");
  it("Has a method named 'render'", function() {
    expect(sl.render).to.be.a('function');
  });
});

//When the instance's 'render' method is called, will construct AND return an html formatted string, whose content will be wrapped in <li> tags.
describe('ShoppingListItem', function() {
  let sl = new ShoppingListItem("name", "description");
  it("When the instance's 'render' method is called, will construct AND return an html formatted string, whose content will be wrapped in <li> tags", function() {
    let response = sl.render();
  expect(response).to.be.a('string');
  });
});