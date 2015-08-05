import {Component, View, Parent} from 'angular2/angular2';

@Component({
  selector: 'example'
})
@View({
  template: `
  <div style="background-color: lightblue; padding: 10px;">
    <h5>Child</h5>
    <p>Parent: {{message}}</p>
  </div>
  `
})
export class Example {
  message:string;
  constructor() {
     //this.message = app.message;
  }
}