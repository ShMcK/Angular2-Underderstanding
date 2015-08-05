import {Component, View, Parent} from 'angular2/angular2';

@Component({
  selector: 'parent'
})
@View({
  template: `
  <div style="background-color: lightblue; padding: 10px;">
    <h5>Parent</h5>
    <p>GrandParent: {{parentMessage}}</p>

    <child></child>
  </div>
  `
})
export class Example {
  message:string;
  constructor(@Parent() grandParent) {
     this.message = "message from parent";
     this.parentMessage = grandParent.message;
  }
}