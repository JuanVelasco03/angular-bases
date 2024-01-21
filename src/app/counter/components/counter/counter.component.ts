import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Bienvenidos a Angular {{ counter }}</p>

    <button (click)="increaseBy(+1)">+ 1</button>
    <button (click)="increaseBy(-1)">- 1</button>
    <button (click)="resetCounter()">Reset</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
