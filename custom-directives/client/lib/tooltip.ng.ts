import {Directive} from 'angular2/angular2';

@Directive({
  selector: '[tooltip]',
  properties: [
    'text: tooltip'
  ],
  hostListeners: {
    'onmouseenter': 'onMouseEnter()',
    'onmouseleave': 'onMouseLeave()',
    'click': 'onClick()'
  }
})
export class Tooltip {
  text:string;

  onClick() {
    console.log(this.text);
  }

  onMouseEnter() {
    console.log(this.text);
  }

  onMouseLeave() {
    console.log('leaving');
  }
}