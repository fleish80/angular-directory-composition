import { NgIf } from '@angular/common';
import { Directive, inject, Input } from '@angular/core';

@Directive({
  selector: '[adcIfHasRole]',
  hostDirectives: [
    {
      directive: NgIf,
      inputs: ['ngIfElse: adcIfHasRoleElse'],
    },
  ],
  standalone: true,
})
export class IfHasRoleDirective {
  private ngIfDirective = inject(NgIf);

  @Input('adcIfHasRole') set role(role: 'admin' | 'user') {
    this.ngIfDirective.ngIf = role === 'admin';
  }
}
