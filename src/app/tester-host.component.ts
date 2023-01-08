import {Component, Input} from '@angular/core';
import {IfHasRoleDirective} from './if-has-role.directive';

@Component({
  selector: 'adc-tester-host',
  standalone: true,
  imports: [
    IfHasRoleDirective
  ],
  template: `
    <p *adcIfHasRole="role; else elseTpl">tester host works!</p>
    <ng-template #elseTpl>tester host doesn't works</ng-template>
  `,
  styles: [],
  hostDirectives: []
})
export class TesterHostComponent {
  @Input() role!: 'admin' | 'user';

}
