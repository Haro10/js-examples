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

    this.render = () => {
        const selectEls = document.createElement('select');
        this.items.forEach((item) => {
         const option = document.createElement("option");
          const optioncContent = document.createTextNode(item);
          option.appendChild(optioncContent);
         selectEls.appendChild(option);
        
    })
     console.log("render's selectEls", selectEls);
    }
  }


  function HtmlLinkElement(url) { 
    this.url = url; 
    
    this.render = function() {
      return `<a href="${this.url}" > Ahadevs.com </a>`
    }
  }
  HtmlLinkElement.prototype = new HtmlElement(); 
  HtmlLinkElement.prototype.constructor = HtmlLinkElement;
  
  const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlLinkElement('http://ahadevs.com')
  ];
  
  for (let element of elements) 
   /*
     HtmlSelectElement and HtmlLinkElement have a same parent, and render(), 
     but render() have diffirent forms 
     => mutiple form => polymorphism
   */
    console.log(element.render());
