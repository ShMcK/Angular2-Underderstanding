import {Component, View, bootstrap} from 'angular2/angular2';
import {ParentCmp} from 'client/parent';
import {ChildCmp} from 'client/child';
import {GrandChildCmp} from 'client/grandchild';

@Component({
  selector: 'grand-parent'
})
@View({
  template: `
  <div style="background-color: lightgreen; padding: 10px;">
    <h1>Grand-Parent</h1>

    <div style="text-align: center;">
      <p>{{counter}}</p>
      <button (click)="onClick()" class="btn">Click Me</button>
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

  onUpdate() {
    console.log('update');
  }
  onClick() {
    this.counter++;
  }
}

bootstrap(GrandParent);