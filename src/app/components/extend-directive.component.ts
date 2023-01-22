import {Component, Input} from '@angular/core';
import {IfHasRoleDirective} from '../directives/if-has-role.directive';

@Component({
  selector: 'adc-extend-directive',
  standalone: true,
  imports: [
    IfHasRoleDirective
  ],
  template: `
    <p *adcIfHasRole="role; else elseTpl">Has role</p>
    <ng-template #elseTpl>Doesn't have a role</ng-template>
  `,
  styles: [`
    :host {
      font-size: 40px;
    }`
  ]
})
export class ExtendDirectiveComponent {

  @Input() role!: 'admin' | 'user';

}
