import {Component, View, EventEmitter} from 'angular2/angular2';
import {GrandParentCmp} from 'client/grandparent';
import {ParentCmp} from 'client/parent';
import {GrandChildCmp} from 'client/grandchild';

@Component({
  selector: 'child'
})
@View({
  template: `
  <div style="background-color: orange; padding: 10px;">
    <h1>Child</h1>

    <div style="text-align: center;">
      <p>{{counter}}</p>
      <button (click)="onClick($event)" class="btn">Click Me</button>
    </div>


    <grand-child></grand-child>
  </div>
  `,
  directives: [GrandChildCmp]
})
export class ChildCmp {
  counter:number;
  update:EventEmitter = new EventEmitter();

  constructor() {
    this.counter = 0;
  }

  onClick(event) {
    this.counter++;
    this.update.next({value: this.counter});
  }
}