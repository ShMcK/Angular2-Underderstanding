import {Component, View, EventEmitter} from 'angular2/angular2';
import {ChildCmp} from 'client/child';

@Component({
  selector: 'parent',
  events: ['fromParent']
})
@View({
  template: `
  <div style="background-color: lightblue; padding: 10px;">
    <h1>Parent</h1>

    <div style="text-align: center;">
      <p>{{counter}}</p>
      <button (click)="onClick()" class="btn">Click Me</button>
    </div>

    <child (from-child)="onUpdate($event)"></child>
  </div>`,
  directives: [ChildCmp]
})
export class ParentCmp {
  counter:number;
  fromParent:EventEmitter;

  constructor() {
    this.fromParent = new EventEmitter();
    this.counter = 0;
  }

  onClick() {
    this.counter++;
    this.fromParent.next({value: this.counter});
  }

  onUpdate(event) {
    this.counter = event.value;
  }
}