import {Component, View, bootstrap, Inject} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgForm, FormBuilder} from 'angular2/forms';

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
  control1:Control;
  control2:Control;
  control3:Control;
  controlGroup1:ControlGroup;
  builtForm:FormBuilder;

  constructor() { //difficulty injecting fb:FormBuilder. Why??

    /*
     ***  Ng- Model
     */
    this.model = {
      initText: 'Some Text'
    };

    /*
     ***  Control Group
     */
    this.controlGroup1 = new ControlGroup({
      groupItem1: new Control('', Validators.required),
      groupItem2: new Control('Init value', Validators.required)
    });
  }

  callControl(event) {
    console.log(event.keyCode);
  }
}

bootstrap(App);