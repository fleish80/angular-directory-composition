import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MouseenterDirective} from '../directives/mouseenter.directive';

@Component({
  selector: 'adc-inline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      inline example
    </p>
  `,
  styles: [`
    :host {
      font-size: 40px;
    }
  `
  ],
  hostDirectives: [MouseenterDirective]
})
export class InlineComponent {

}
