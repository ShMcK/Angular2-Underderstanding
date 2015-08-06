import {Component, View, bootstrap} from 'angular2/angular2';
import {formDirectives, NgControl, Validators, NgForm} from 'angular2/forms';

interface IModel {
  name: string;
}

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/app.ng.html',
  directives: [formDirectives]
})
class App {
  model:IModel;

  constructor() {
    this.model = {
      name: 'Some Name'
    }
  }
}

bootstrap(App);