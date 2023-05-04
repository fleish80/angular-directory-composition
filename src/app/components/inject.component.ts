import { Component, OnInit, inject } from '@angular/core';
import { UnderlineDirective } from '../directives/underline.directive';

@Component({
  selector: 'adc-inject',
  standalone: true,
  imports: [],
  template: `Inject Example`,
  styles: [`
      :host {
          font-size: 50px;
      }
  `],
  hostDirectives: [UnderlineDirective]
})
export class InjectComponent implements OnInit {
  
  #underlineDirective = inject(UnderlineDirective);

  ngOnInit(): void {
    this.#underlineDirective.color = '#123456';
  }

}
