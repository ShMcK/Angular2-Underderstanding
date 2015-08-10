import {Component, View, bootstrap} from 'angular2/angular2';
import {Modal} from 'client/lib/modal';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/app.ng.html'
})
class App {
  constructor() {
    this.myModal = new Modal({
      content: '<p>Modal test</p>',
      maxWidth: 600
    });
  }
  open() {
    this.myModal.open();
  }
}

bootstrap(App);