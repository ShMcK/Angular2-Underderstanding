import {Component, View, EventEmitter} from 'angular2/angular2';
import {GrandParentCmp} from 'client/grandparent';
import {ParentCmp} from 'client/parent';
import {ChildCmp} from 'client/child';

@Component({
  selector: 'grand-child'
})
@View({
  template: `
  <div style="background-color: lightgrey; padding: 10px;">
    <h1>Grand-Child</h1>

    <div style="text-align: center;">
      <p>{{counter}}</p>
      <button (click)="onClick()" class="btn">Click Me</button>
      <button (^click)="onClick()" class="btn">Click Parent</button>
    </div>

    <child></child>
  </div>
  `
})
export class GrandChildCmp {
  counter:number;

  constructor() {
    this.counter = 0;
    this.update = new EventEmitter();
  }

  onClick() {
    this.counter++;
  }
}