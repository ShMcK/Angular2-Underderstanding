import {Component, View, Parent} from 'angular2/angular2';

@Component({
  selector: 'child'
})
@View({
  template: `
  <div style="background-color: lightpurple; padding: 10px;">
    <h5>Child</h5>
    <p>GrandParent: {{parentMessage}}</p>

    <child></child>
  </div>
  `
})
export class Child {
  message:string;
  constructor(@Parent() parent) {
    this.message = "message from child";
    this.parentMessage = parent.message;
  }
}