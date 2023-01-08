import {Directive, HostListener, inject, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs';

@Directive({
    selector: '[adcEvent]',
    standalone: true
})
export class EventDirective {

    #httpClient = inject(HttpClient);
    #ngZone = inject(NgZone);

    data: any;

    @HostListener('click')
    onClick() {
        if (!this.data) {
            throw new Error('Please define your data');
        }
        this.#ngZone.runOutsideAngular(() => {
            this.#httpClient.post('this.is.my-domain', {user: 'me', data: {}}).pipe(take(1))
                .subscribe();
        });
    }

}
