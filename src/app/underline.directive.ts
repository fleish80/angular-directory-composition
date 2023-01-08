import {Directive, ElementRef, HostListener, inject, Input} from '@angular/core';

@Directive({
  selector: '[adcUnderline]',
  standalone: true
})
export class UnderlineDirective {
  @Input() color = 'black';

  #hostElement = inject(ElementRef<HTMLElement>);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.#hostElement.nativeElement.style.textDecoration = 'underline dotted';
    this.#hostElement.nativeElement.style.textDecorationColor = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.#hostElement.nativeElement.style.textDecoration = 'none';
    this.#hostElement.nativeElement.style.textDecorationColor = 'none';
  }
}
