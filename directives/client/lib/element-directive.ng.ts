import {Directive} from 'angular2/angular2';
import {ElementRef} from 'angular2/angular2';

@Directive({
  selector: '[element-directive]',
})
export class ElementDirective {
  constructor(el: ElementRef) {
    console.log(el);
  }
}