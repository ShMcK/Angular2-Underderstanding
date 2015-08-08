import {Component, View, bootstrap} from 'angular2/angular2';
import {Tooltip} from 'client/lib/tooltip';
import {RedDecorator} from 'client/lib/red';

@Component({
  selector: 'app'
})
@View({
  template: `
    <div class="container">
      <button class="btn" red>Button</button>
    </div>`,
  directives: [Tooltip, RedDecorator]
})
class App {
  greeting:string;

  constructor() {
    this.greeting = 'Hello!';
  }
}

bootstrap(App);