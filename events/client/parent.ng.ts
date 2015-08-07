import {Component, View, EventEmitter} from 'angular2/angular2';
import {GrandParentCmp} from 'client/grandparent';
import {ChildCmp} from 'client/child';
import {GrandChildCmp} from 'client/grandchild';

@Component({
  selector: 'parent'
})
@View({
  template: `
  <div style="background-color: lightblue; padding: 10px;">
    <h1>Parent</h1>

    <div style="text-align: center;">
      <p>{{counter}}</p>
      <button (click)="onClick()" class="btn">Click Me</button>
      <button (^click)="onClick()" class="btn">Click Parent</button>
    </div>

    <child></child>
  </div>
  `,
  directives: [ChildCmp]
})
export class ParentCmp {
  counter:number;

  constructor() {
    this.counter = 0;
    this.update = new EventEmitter();
  }

  onClick() {
    this.counter++;
  }
}