import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'client/app.ng.html',
  directives: [NgFor]
})
class App {
  constructor() {
    this.hello = "Hello";
    this.someDate = Date.now();
    this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.page = 3;
  }
}

bootstrap(App);