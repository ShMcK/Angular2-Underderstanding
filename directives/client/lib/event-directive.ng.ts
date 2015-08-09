import {Directive} from 'angular2/angular2';

@Directive({
  selector: '[event-directive]',
  host: {
    '(click)': 'onClick()',
    '(window:resize)': 'onResize()',
    '(mouseover)': 'onMouseover()'
  }
})
export class EventDirective {
  constructor() {}
  onClick() {
    console.log('clicked');
  }
  onResize() {
    console.log('resize');
  }
  onMouseover() {
    console.log('mouseover');
  }
}