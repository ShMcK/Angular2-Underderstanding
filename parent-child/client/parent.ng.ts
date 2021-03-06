import {Component, View} from 'angular2/angular2';
import {GrandParentCmp} from 'client/grandparent';
import {ChildCmp} from 'client/child';
import {GrandChildCmp} from 'client/grandchild';

@Component({
  selector: 'parent'
})
@View({
  template: `
  <div style="background-color: lightblue; padding: 10px;">
    <p>Grand-Parent: {{grandParentMessage}}</p>
    <h1>Parent</h1>
    <p>Child: {{childMessage}}</p>
    <p>Grand-Child: {{grandChildMessage}}</p>

    <child></child>
  </div>
  `,
  directives: [ChildCmp]
})
export class ParentCmp {
  message:string;
  grandParentMessage:string;
  childMessage:string;
  grandChildMessage:string;

  constructor() {
    this.message = "message from parent";
    //this.grandParentMessage = grandParent.message;
    //this.childMessage = child.message;
    //this.grandChildMessage = grandChild.message;
  }
}