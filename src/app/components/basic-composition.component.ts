import {Component} from '@angular/core';

@Component({
  selector: 'adc-basic-composition',
  standalone: true,
  imports: [],
  template: `
    <p>
      basic composition
    </p>
  `,
  styles: [`
    :host {
      font-size: 40px;
    }
  `
  ]
})
export class BasicCompositionComponent {

}
