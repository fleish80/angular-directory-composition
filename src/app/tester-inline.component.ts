import {Component, inject, OnInit} from '@angular/core';
import {MouseenterDirective} from './mouseenter.directive';
import {EventDirective} from './event.directive';
@Component({
  selector: 'adc-tester-inline',
  standalone: true,
  imports: [],
  template: ` <p>tester inline works!</p> `,
  styles: [],
  hostDirectives: [MouseenterDirective, EventDirective]
})
export class TesterInlineComponent implements OnInit{

  #eventDirective = inject(EventDirective);

  ngOnInit(): void {
    this.#eventDirective.data = {id: 5}
  }
}
