import {Component, View, Host} from 'angular2/angular2';
import {GrandParentCmp} from 'client/grandparent';
import {ParentCmp} from 'client/parent';
import {ChildCmp} from 'client/child';

@Component({
  selector: 'grand-child'
})
@View({
  template: `
  <div style="background-color: lightgrey; padding: 10px;">
    <p>Grand-Parent: {{grandParentMessage}}</p>
    <p>Parent: {{parentMessage}}</p>
    <p>Child</p>
    <h1>Grand-Child: {{grandChildMessage}}</h1>

    <child></child>
  </div>
  `
})
export class GrandChildCmp {
  message:string;
  childMessage: string;
  constructor() {
    this.message = "message from grandchild";
    // grandParentMessage
    // parentMessage
    // grandChildMessage
  }
}