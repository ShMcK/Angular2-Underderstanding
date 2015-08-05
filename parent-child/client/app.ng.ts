import {Component, View, bootstrap} from 'angular2/angular2';
import {Example} from 'client/example';
@Component({
  selector: 'app'
})
@View({
  template: `
  <div style="background-color: lightgreen; padding: 10px;">
    <h5>Parent</h5>
    <example></example>
  </div>
  `,
  directives: [Example]
})
class App {
  message:string;

  constructor() {
    this.message = "message from parent";

  }
}

bootstrap(App);