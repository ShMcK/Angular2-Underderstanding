export class Updater {
  counter:number;

  constructor() {
    this.counter = 0
  }

  onUpdate(event) {
    this.counter = event.value;
  }
}