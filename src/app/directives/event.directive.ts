import {Directive, HostListener, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs';

@Directive({
    selector: '[adcEvent]',
    standalone: true
})
export class EventDirective {

    #httpClient = inject(HttpClient);

    data: any;

    @HostListener('click')
    onClick() {
        if (!this.data) {
            throw new Error('Please define your data');
        }
            this.#httpClient.post('this.is.my-domain', {user: 'me', data: this.data}).pipe(take(1))
                .subscribe();
    }

}
