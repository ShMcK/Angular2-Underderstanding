import {Component, View, bootstrap} from 'angular2/angular2';;
import {EventDirective} from 'client/lib/event-directive';

@Component({
  selector: 'app'
})
@View({
  template: `
    <div class="container">
      <button class="btn" event-directive>Button</button>
    </div>`,
  directives: [EventDirective]
})
class App {}

bootstrap(App);