import {Component, View, Attribute} from 'angular2/angular2';

@Component({
  selector: 'example',
  properties: ['test', 'hyphenatedTest', 'alias: aliasTest | uppercase']
})
@View({
  template: `
    <p>Test: {{test}}</p>
    <!-- result: attribute passed to component -->
    <p>Hyphenated: {{hyphenatedTest}}</p>
    <!-- result: hyphenated attribute passed to component -->
    <p>Aliased: {{alias}}</p>
    <!-- result: attribute passed to component then aliased -->

    <button (click)="attributeCheck()">What is the value of 'this.test'?</button>
    <!-- result: attribute passed to component -->
  `
})
export class Example {
  test:string;
  hyphenatedTest: string;
  alias: string;
  onInit() {
    console.log(this.test); // result: attribute passed to component
    console.log(this.hyphenatedTest); // result: hyphenated attribute passed to component
    console.log(this.alias); // result: attribute passed to component then aliased
  }
}