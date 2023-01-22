import {Component} from '@angular/core';
import {MouseenterDirective} from './directives/mouseenter.directive';
import {BoldDirective} from './directives/bold.directive';
import {UnderlineDirective} from './directives/underline.directive';
import {BasicComponent} from './components/basic.component';
import {BasicCompositionComponent} from './components/basic-composition.component';
import {InlineComponent} from './components/inline.component';
import {EventComponent} from './components/event.component';
import {ExtendDirectiveComponent} from './components/extend-directive.component';

@Component({
    selector: 'adc-root',
    template: `
        <!--Basic directives example as it was before-->
        <adc-basic adcUnderline color="pink" adcBold (hover)="hoverEventHandler()"></adc-basic>

        <!--Composition inline inside directive-->
        <adc-basic-composition adcMouseenter color="green" (hover)="hoverEventHandler()"></adc-basic-composition>

        <!--Composition inline inside component-->
        <adc-inline color="blue" (hover)="hoverEventHandler()"></adc-inline>

        <!--Inject directive and send it data-->
        <adc-event></adc-event>

        <!--Override existed directive-->
        <adc-extend-directive role="admin"></adc-extend-directive>
        <adc-extend-directive role="user"></adc-extend-directive>
    `,
    styles: [],
    imports: [
        BoldDirective,
        UnderlineDirective,
        MouseenterDirective,
        BoldDirective,
        UnderlineDirective,
        BasicComponent,
        BasicCompositionComponent,
        InlineComponent,
        EventComponent,
        ExtendDirectiveComponent
    ],
    standalone: true
})
export class AppComponent {

    hoverEventHandler() {
        console.log('hover');
    }
}
