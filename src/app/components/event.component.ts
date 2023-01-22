import {Component, inject, OnInit} from '@angular/core';
import {EventDirective} from '../directives/event.directive';

@Component({
  selector: 'adc-event',
  standalone: true,
  imports: [],
  template: `
    <p>
      event example
    </p>
  `,
  styles: [`
  :host {
    font-size: 40px;
  }`
  ],
  hostDirectives: [EventDirective]
})
export class EventComponent implements OnInit {

  #eventDirective = inject(EventDirective);

  ngOnInit(): void {
    this.#eventDirective.data = {id: 5}
  }

}
