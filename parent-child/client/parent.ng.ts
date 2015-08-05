import {Component, View, Parent} from 'angular2/angular2';
import {GrandParentCmp} from 'client/grandparent';
import {ChildCmp} from 'client/child';
import {GrandChildCmp} from 'client/grandchild';

@Component({
  selector: 'parent'
})
@View({
  template: `
  <div style="background-color: lightblue; padding: 10px;">
    <p>Grand-Parent: {{parentMessage}}</p>
    <h1>Parent</h1>
    <p>Child: </p>
    <p>Grand-Child: </p>
    <child></child>
  </div>
  `,
  directives: [ChildCmp]
})
export class ParentCmp {
  message:string;
  constructor() {
     this.message = "message from parent";

  }
}