import {Component, View, Parent} from 'angular2/angular2';
import {GrandParentCmp} from 'client/grandparent';
import {ParentCmp} from 'client/parent';
import {GrandChildCmp} from 'client/grandchild';

@Component({
  selector: 'child'
})
@View({
  template: `
  <div style="background-color: orange; padding: 10px;">
    <p>GrandParent: </p>
    <p>Parent: </p>
    <h1>Child</h1>
    <p>Grand-Child: </p>

    <grand-child></grand-child>
  </div>
  `,
  directives: [GrandChildCmp]
})
export class ChildCmp {
  message:string;
  constructor() {
    this.message = "message from child";
  }
}