//jshint esversion: 6

class ShoppingList {
  constructor(items) {
    this.items = [];
  }


  addItem(slInstance) {
//invoking 'addItem' by passing in a ShoppingListItem object should ADD the item to 'this.items'
    if(!(slInstance instanceof ShoppingListItem)) { //a short-circuit
    throw new Error("Not a shopping list item");
    }

  this.items.push(slInstance);
  return this.items;
}
  removeItem(slInstance){

  }

  render(){

  }

}



console.log(this.items);
module.exports = ShoppingList;