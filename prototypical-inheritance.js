function HtmlElement() {
  this.onClick = () => {
    console.log('on click');
  }
}

HtmlElement.prototype.focus = () => {
    console.log('on focus')
}

function HtmlSelectElement(items = []) {
  this.items = items;
  
  this.add = (item) => {
      this.items.push(item)
  };

  this.removeItem = (item) => {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

/*
 use new keyword to also take this.onClick() 
 becasue this.onClick() -> not in HtmlElement.prototype
 */
HtmlSelectElement.prototype = new HtmlElement();


/*
 HtmlSelectElement {items: Array(0), add: ƒ, removeItem: ƒ}
add: (item) => { this.items.push(item) }
items: []
removeItem: (item) => {…}
__proto__: HtmlElement
click: () => { console.log('on click'); }
    __proto__:
    focus: () => { console.log('on focus') }
    constructor: ƒ HtmlElement()
    __proto__: Object
*/
const Ele = new HtmlSelectElement();

