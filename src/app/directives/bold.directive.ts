import {Directive, ElementRef, EventEmitter, HostListener, inject, Output} from '@angular/core';

@Directive({
    selector: '[adcBold]',
    standalone: true
})
export class BoldDirective {

    @Output() hover = new EventEmitter();
    #hostElement = inject(ElementRef<HTMLElement>);

    @HostListener('mouseenter')
    onMouseEnter() {
        this.#hostElement.nativeElement.style.fontWeight = 'bold';
        this.hover.emit();
    }

    @HostListener('mouseleave')
    onMouserLeave() {
        this.#hostElement.nativeElement.style.fontWeight = 'normal';
    }

}
