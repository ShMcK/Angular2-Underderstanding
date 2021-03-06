import {Component, View, bootstrap} from 'angular2/angular2';
import {ParentCmp} from 'client/parent';
import {Updater} from 'client/updater'

@Component({
  selector: 'grand-parent'
})
@View({
  template: `
  <div style="background-color: lightgreen; padding: 10px;">
    <h1>Grand-Parent</h1>

    <div style="text-align: center;">
      <p>{{counter}}</p>
    </div>

    <parent (from-parent)="onUpdate($event)"></parent>
  </div>
  `,
  directives: [ParentCmp]
})
class GrandParent extends Updater{}

bootstrap(GrandParent);