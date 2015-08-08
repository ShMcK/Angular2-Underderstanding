import {Directive, Element from 'angular2/angular2';

@Directive({
  selector: '[red]'
})
export class RedDecorator{
  constructor(el: Element) { //el: Element
    //el.domElement.style.color = red;
    console.log('red');
  }
}