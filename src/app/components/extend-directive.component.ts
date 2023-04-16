import { Component, Input } from '@angular/core';
import { IfHasRoleDirective } from '../directives/if-has-role.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'adc-extend-directive',
  standalone: true,
  imports: [IfHasRoleDirective, NgIf],
  template: `
    <!-- <p *ngIf="role === 'admin'; else elseTpl">Has role</p> -->

    <p *adcIfHasRole="role; else elseTpl">Has role</p>

    <!-- <ng-template [adcIfHasRole]="role" [adcIfHasRoleElse]="elseTpl">
      <p>Has role</p>
    </ng-template> -->

    <ng-template #elseTpl>
      <p>Doesn't have a role</p>
    </ng-template>
  `,
  styles: [
    `
      :host {
        font-size: 40px;
      }
    `,
  ],
})
export class ExtendDirectiveComponent {
  @Input() role!: 'admin' | 'user';
}
