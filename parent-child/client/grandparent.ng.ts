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
    <p>Parent: {{parentMessage}}</p>
    <p>Child: {{childMessage}}</p>
    <p>Grand-Child: {{grandChildMessage}}</p>

    <parent></parent>
  </div>
  `,
  directives: [ParentCmp]
})
class GrandParent {
  message:string;

  constructor() {
    this.message = "message from grandparent";
    // parentMessage
    // childMessage
    // grandChildMessage
  }
}

bootstrap(GrandParent);