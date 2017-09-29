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

  render(){
    let html_output = `<li class = "completed_[${this.is_done}]"><span>[${this.name}]</span><span>[${this.description}]</span></li>`;

    return html_output;
  }
}

module.exports = ShoppingListItem;