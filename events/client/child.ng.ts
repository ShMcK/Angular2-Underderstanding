import {Component, View, EventEmitter} from 'angular2/angular2';
import {Updater} from 'client/updater';

@Component({
  selector: 'child',
  events: ['fromChild']
})
@View({
  template: `
  <div style="background-color: orange; padding: 10px;">
    <h1>Child</h1>

    <div style="text-align: center;">
      <p>{{counter}}</p>
      <button (click)="onClick($event)" class="btn">Click Me</button>
    </div>

  </div>
  `
})
export class ChildCmp extends Updater {
  counter:number;
  fromChild:EventEmitter = new EventEmitter();

  onClick(event) {
    this.counter++;
    this.fromChild.next({value: this.counter});
  }
}