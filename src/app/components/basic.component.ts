import {Component} from '@angular/core';
@Component({
  standalone: true,
  imports: [],
  selector: 'adc-basic',
  template: `
    <p>basic example</p>
  `,
  styles: [`
      :host {
          font-size: 50px;
      }
  `]
})
export class BasicComponent {

}
