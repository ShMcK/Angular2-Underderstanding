import {Component, View, bootstrap, Inject} from 'angular2/angular2';
import {formDirectives, Control, ControlGroup, Validators, NgForm, FormBuilder} from 'angular2/forms';

interface IModel {
  ngModel?: string;
  initText: string;
}

@Component({
  selector: 'app',
  viewBindings: [FormBuilder]
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

  constructor(fb:FormBuilder) { //

    /*
     ***  Ng- Model
     */
    this.model = {
      initText: 'Some Text'
    };

    /*
     ***  Basic Control's
     */
    this.control1 = new Control('');
    this.control2 = new Control('Init Value');
    this.control3 = new Control('');

    /*
     ***  Control Group
     */
    this.controlGroup1 = new ControlGroup({
      groupItem1: new Control(''),
      groupItem2: new Control('Init value')
    });

    /*
     ***  Form Builder
     */
    this.builtForm = fb.group({
      formItem1: [""],
      formItem2: ["init value"]
    });

  }

  callControl(event) {
    console.log(event.keyCode);
  }
}

bootstrap(App);