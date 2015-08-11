import {Directive, ElementRef, Renderer} from 'angular2/angular2';

@Directive({
  selector: '[element-directive]'
})
export class ElementDirective {
  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el, 'color', 'red');
  }
}