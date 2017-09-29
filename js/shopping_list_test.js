//jshint esversion: 6


////////TESTS for Shopping List Items
const expect = chai.expect;
const should = chai.should();

//is a function
describe('ShoppingListItem', function() {
    let sl = new ShoppingListItem("name", "description");

  it('Is a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });
// });

// //has property 'name'
// describe('ShoppingListItem', function() {
//     let sl = new ShoppingListItem("name", "description");

  it("Has a property named 'name'", function() {
    expect(sl).to.have.property("name");
  });
// });

// //has a property named 'description'
// describe('ShoppingListItem', function() {
//     let sl = new ShoppingListItem("name", "description");
  it("Has a property named 'description'", function() {
    expect(sl).to.have.property("description");
  });
// });

// //has a property named 'is_done'
// describe('ShoppingListItem', function() {
//   let sl = new ShoppingListItem("name", "description");
  it("Has a property named 'is_done'", function() {
    expect(sl).to.have.property("is_done");
  });
});

//has a constructor method that accepts 2 arguments 'name' and 'description'
describe('constructor', function() {
  let sl = new ShoppingListItem("name", "description");
  it("Has a constructor method that accepts two arguments, 'name'  and 'description'", function() {
    expect(sl).to.have.constructor("name", "description");
  });
});

//Has a method named 'check'
describe('check', function() {
  let sl = new ShoppingListItem("name", "description");
  it("Has a method named 'check'", function() {
    expect(sl.check).to.be.a("function");
  });
// });

// //When the instance's 'check' method is called, will set its 'is_done' property to be TRUE
// describe('check', function() {
//   let sl = new ShoppingListItem("name", "description");
  it("When the instance's 'check' method is called, will set its 'is_done' property to be TRUE", function() {
    sl.check(); //invokes the work
    expect(sl.is_done).to.be.true;
  }); //should be set to be true
});

//Has a method named 'uncheck'
describe('uncheck', function() {
  let sl = new ShoppingListItem("name", "description");
  it("Has a method called 'uncheck'", function() {
    expect(sl.uncheck).to.be.a('function');
  });
// });

// //When the instance's 'uncheck' method is called, will set its 'is_done' property to be FALSE
// describe('uncheck', function() {
//   let sl = new ShoppingListItem("name", "description");
  it("When the instance's 'uncheck' method is called, will set it's 'is_done' property to be FALSE", function() {
    sl.uncheck();//invokes the work
    expect(sl.is_done).to.be.false;
  });
});

//Has a method named 'render'
describe('render', function() {
  let sl = new ShoppingListItem("name", "description");
  it("Has a method named 'render'", function() {
    expect(sl.render).to.be.a('function');
  });
// });

// //When the instance's 'render' method is called, will construct AND return an html formatted string, whose content will be wrapped in <li> tags.
// describe('render', function() {
//   let sl = new ShoppingListItem("name", "description");
  it("When the instance's 'render' method is called, will construct AND return an html formatted string, whose content will be wrapped in <li> tags", function() {
    let response = sl.render();
  expect(response).to.be.a('string');
  });
});



///////TESTS for Shopping List

//Is a (class) function
describe('ShoppingList', function() {
  let s_list = new ShoppingList("items");

  it("Is a function", function(){
  expect(ShoppingList).to.be.a('function');
  });
});

//Has a property named 'items'
describe('items', function() {
  let s_list = new ShoppingList("items");
  it("Has a property named 'items'", function() {
  expect(s_list).to.have.property('items');
  });
});

//Has a constructor method that initializes 'items' as an empty Array
describe('constructor', function() {
  let s_list = new ShoppingList("items");
  it("Has a constructor method that initializes 'items' as an empty Array", function() {
  expect(s_list.items).to.be.a('Array');
  });
});

//Has a method named 'addItem' that accepts a single ShoppingListItem argument
describe('addItem', function() {
  let s_list = new ShoppingList("items");
  it("Has a method named 'addItem' that accepts a single ShoppingListItem argument", function() {
  expect(s_list.addItem).to.be.a('function');
  });

//invoking the 'addItem' method by passing in a ShoppingListItem object should add that object to the 'items' array
  it("'addItem' should add a ShoppingListItem object to the 'items' array", function() {
  expect(['grapes']).to.include('grapes');
  });
//if not
// //Invoking the 'addItem' method by pasing in anything else that is NOT a ShoppingListItem object, should immediately throw and error
  it("'addItem' should immediately throw an error if anything else that is NOT a ShoppingListItem object is passed in", function() {
  expect({name: 'fern', description: 'green plant'}).to.include({name: 'fern'});
       expect(function () {shopl.render(); }).to.throw();
  });
});

//Has a method named ' removeItem' that accepts a single ShoppingListItem argument
describe('removeItem', function() {
  let s_list = new ShoppingList("items");
  it("Has a method name 'removeItem'", function() {
  expect(s_list.removeItem).to.be.a('function');
  });



});