import { Component } from '@angular/core';
import { UnderlineDirective } from '../directives/underline.directive';
import { BoldDirective } from '../directives/bold.directive';
@Component({
  standalone: true,
  imports: [UnderlineDirective, BoldDirective],
  selector: 'adc-basic-in',
  template: `<p>basic in example</p>`,
  hostDirectives: [
    {
      directive: UnderlineDirective,
      inputs: ['color'],
      /**
       * It's possible to provide an input name alternative
       */
      // inputs: ['color:underlineColor']
    },
    {
      directive: BoldDirective,
      outputs: ['hover'],
    },
  ],
  styles: [
    `
      :host {
        font-size: 50px;
      }
    `,
  ],
})
export class BasicInComponent {}
