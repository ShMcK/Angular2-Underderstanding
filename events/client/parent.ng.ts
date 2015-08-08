import {Component, View, EventEmitter} from 'angular2/angular2';
import {ChildCmp} from 'client/child';
import {Updater} from 'client/updater';

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
export class ParentCmp extends Updater {
  fromParent:EventEmitter = new EventEmitter();

  onClick() {
    this.counter++;
    this.fromParent.next({value: this.counter});
  }
}