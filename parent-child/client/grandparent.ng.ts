import {Component, View, bootstrap} from 'angular2/angular2';
import {ParentCmp} from 'client/parent';

@Component({
  selector: 'grand-parent'
})
@View({
  template: `
  <div style="background-color: lightgreen; padding: 10px;">
    <h3>Grand-Parent</h3>
    <p>Parent: </p>
    <p>Child: </p>
    <p>Grand-Child: </p>
    <parent></parent>
  </div>
  `,
  directives: [ParentCmp]
})
class GrandParent {
  message:string;

  constructor() {
    this.message = "message from grandparent";

  }
}

bootstrap(GrandParent);