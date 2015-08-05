import {Component, View, Parent} from 'angular2/angular2';
import {GrandChildCmp} from 'client/grandchild';

@Component({
  selector: 'child'
})
@View({
  template: `
  <div style="background-color: orange; padding: 10px;">
    <p>GrandParent: </p>
    <p>Parent: </p>
    <h3>Child</h3>
    <p>Grand-Child: </p>

    <grand-child></grand-child>
  </div>
  `,
  directives: [GrandChildCmp]
})
export class ChildCmp {
  message:string;
  constructor() {
  }
}