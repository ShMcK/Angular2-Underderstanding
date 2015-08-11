import {Component, View, bootstrap} from 'angular2/angular2';
import {EventDirective} from 'client/lib/event-directive';
import {ElementDirective} from 'client/lib/element-directive';

@Component({
  selector: 'app'
})
@View({
  template: `
    <div class="container">
      <button class="btn" event-directive>Button</button>
    </div>,
    <div class="container">
      <button class="btn" element-directive>Button</button>
    </div>
    `,
  directives: [EventDirective, ElementDirective]
})
class App {}

bootstrap(App);