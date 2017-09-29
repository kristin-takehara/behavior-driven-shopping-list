//jshint esversion: 6

class ShoppingList {
  constructor(items) {
    this.items = [];
  }


  addItem(slInstance) {
//invoking 'addItem' by passing in a ShoppingListItem object should ADD the item to 'this.items'
  if(slInstance instanceof ShoppingListItem) {
    this.items.push(slInstance);
    //<<<--test against
//if the object is NOT from ShoppingListItem, should immediately throw an error
  }else{
    throw new Error('Check your list twice');
  }
}
  removeItem(slInstance){

  }

  render(){

  }

}



console.log(this.items);
module.exports = ShoppingList;