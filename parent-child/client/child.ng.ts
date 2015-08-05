import {Component, View, Host} from 'angular2/angular2';
import {GrandParentCmp} from 'client/grandparent';
import {ParentCmp} from 'client/parent';
import {GrandChildCmp} from 'client/grandchild';

@Component({
  selector: 'child'
})
@View({
  template: `
  <div style="background-color: orange; padding: 10px;">
    <p>GrandParent: {{grandParentMessage}}</p>
    <p>Parent: {{parentMessage}}</p>
    <h1>Child</h1>
    <p>Grand-Child: {{grandChildMessage}}</p>

    <grand-child></grand-child>
  </div>
  `,
  directives: [GrandChildCmp]
})
export class ChildCmp {
  message:string;
  grandParentMessage:string;
  parentMessage:string;
  grandChildMessage:string;

  constructor() {
    this.message = "message from child";
    //this.grandParentMessage = grandParent.message;
    //this.parentMessage = parent.message;
    //this.grandChildMessage = grandChild.message;
  }
}