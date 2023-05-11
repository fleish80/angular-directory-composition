import { Component } from '@angular/core';
import { MouseenterDirective } from '../directives/mouseenter.directive';

@Component({
  selector: 'adc-basic-directive-in-composition',
  standalone: true,
  imports: [],
  template: ` <p>basic directive in composition</p> `,
  styles: [
    `
      :host {
        font-size: 40px;
      }
    `,
  ],
  hostDirectives: [MouseenterDirective],
})
export class BasicDirectiveInCompositionComponent {}
