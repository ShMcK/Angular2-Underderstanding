import {Component, View, Parent} from 'angular2/angular2';

@Component({
  selector: 'grand-child'
})
@View({
  template: `
  <div style="background-color: lightgrey; padding: 10px;">
    <h5>Child</h5>
    <p>Child: {{parentMessage}}</p>

    <child></child>
  </div>
  `
})
export class Child {
  message:string;
  constructor(@Parent() child) {
    this.message = "message from grand-child";
    this.parentMessage = child.message;
  }
}