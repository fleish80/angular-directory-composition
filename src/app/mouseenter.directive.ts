import {Directive} from '@angular/core';
import {BoldDirective} from './bold.directive';
import {UnderlineDirective} from './underline.directive';

@Directive({
    selector: '[adcMouseenter]',
    standalone: true,
    hostDirectives: [
        {
            directive: UnderlineDirective,
            inputs: ['color']
            /**
             * It's possible to provide an input name alternative
             */
            // inputs: ['color:underlineColor']
        },
        {
            directive: BoldDirective,
            outputs: ['hover']
        }
    ]
})
export class MouseenterDirective {

}
