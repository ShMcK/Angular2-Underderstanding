import {Component, View, EventEmitter} from 'angular2/angular2';
import {GrandChildCmp} from 'client/grandchild';
3
@Component({
  selector: 'child',
  events: ['fromChild']
})
@View({
  template: `
  <div style="background-color: orange; padding: 10px;">
    <h1>Child</h1>

    <div style="text-align: center;">
      <p>{{counter}}</p>
      <button (click)="onClick($event)" class="btn">Click Me</button>
    </div>


    <!--<grand-child></grand-child>-->
  </div>
  `,
  //directives: [GrandChildCmp]
})
export class ChildCmp {
  counter:number;
  fromChild:EventEmitter;

  constructor() {
    this.counter = 0;
    this.fromChild = new EventEmitter();
  }

  onClick(event) {
    this.counter++;
    this.fromChild.next({value: this.counter});
  }
}