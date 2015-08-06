import {Component, View, bootstrap} from 'angular2/angular2';
import {formDirectives, Control, Validators, NgForm} from 'angular2/forms';

interface IModel {
  ngModel?: string;
  initText: string;
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
  control1: Control;
  control2: Control;
  control3: Control;

  constructor() {
    this.model = {
      initText: 'Some Text'
    };

    this.control1 = new Control('');
    this.control2 = new Control('Init Value');
    this.control3 = new Control('');
  }
  callControl(event) {
    console.log(event.keyCode);
  }
}

bootstrap(App);