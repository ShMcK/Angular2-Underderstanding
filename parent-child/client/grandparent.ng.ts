import {Component, View, bootstrap} from 'angular2/angular2';
import {Parent} from 'client/parent';
@Component({
  selector: 'grand-parent'
})
@View({
  template: `
  <div style="background-color: lightgreen; padding: 10px;">
    <h5>GrandParent</h5>
    <parent></parent>
  </div>
  `,
  directives: [Parent]
})
class GrandParent {
  message:string;

  constructor() {
    this.message = "message from grandparent";

  }
}

bootstrap(GrandParent);