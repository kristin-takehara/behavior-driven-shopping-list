//jshint esversion: 6

class ShoppingListItem{
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check(){
  //will SET 'is_done' to be true
    this.is_done = true;
  }

  uncheck(){
    this.is_done = false;
  }

  render(){ //<<<--Need to construct this method
    let done = this.check();
    let name = this.name;
    let description = this.description;

    let html_output = `<li class = "completed_[${done}]"> \ <span>[${name}] </span> \ <span>[${description}]</span> \ </li>`;

    return html_output;
  }
}

module.exports = ShoppingListItem;