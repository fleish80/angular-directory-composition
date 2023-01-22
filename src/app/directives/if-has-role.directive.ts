import { NgIf } from '@angular/common';
import {Directive, inject, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[adcIfHasRole]',
  hostDirectives: [{
    directive: NgIf,
    inputs: ['ngIfElse: adcIfHasRoleElse']
  }],
  standalone: true,
})
export class IfHasRoleDirective {
  private ngIfDirective = inject(NgIf);
  private templateRef = inject(TemplateRef<any>);

  @Input('adcIfHasRole') set role(role: 'admin' | 'user') {
    this.ngIfDirective.ngIf = role === 'admin';
  }
}
