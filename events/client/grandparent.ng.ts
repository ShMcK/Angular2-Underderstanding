import {Component, View, bootstrap} from 'angular2/angular2';
import {ParentCmp} from 'client/parent';
import {ChildCmp} from 'client/child';
import {GrandChildCmp} from 'client/grandchild';

@Component({
  selector: 'grand-parent',
  events: 'update'
})
@View({
  template: `
  <div style="background-color: lightgreen; padding: 10px;">
    <h1>Grand-Parent</h1>

    <div style="text-align: center;">
      <p>{{counter}}</p>
      <!-- update is target for event emitter -->
      <button (update)="onUpdate()" class="btn">Click Me</button>
    </div>

    <parent></parent>
  </div>
  `,
  directives: [ParentCmp]
})
class GrandParent {
  counter:number;

  constructor() {
    this.counter = 0
  }

  onUpdate(event) {
    this.counter = event.value;
  }
}

bootstrap(GrandParent);