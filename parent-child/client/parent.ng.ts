import {Component, View, Parent} from 'angular2/angular2';
import {ChildCmp} from 'client/child';

@Component({
  selector: 'parent'
})
@View({
  template: `
  <div style="background-color: lightblue; padding: 10px;">
    <p>Grand-Parent: {{parentMessage}}</p>
    <h3>Parent</h3>
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