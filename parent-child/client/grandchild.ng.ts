import {Component, View, Parent} from 'angular2/angular2';

@Component({
  selector: 'grand-child'
})
@View({
  template: `
  <div style="background-color: lightgrey; padding: 10px;">
    <p>Grand-Parent: </p>
    <p>Parent: </p>
    <p>Child</p>
    <h3>Grand-Child:</h3>


    <child></child>
  </div>
  `
})
export class GrandChildCmp {
  message:string;
  parentMessage: string;
  constructor() {

  }
}