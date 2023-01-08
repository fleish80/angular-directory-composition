import { Component } from '@angular/core';
import {TesterComponent} from './tester.component';
import {BoldDirective} from './bold.directive';
import {UnderlineDirective} from './underline.directive';
import {MouseenterDirective} from './mouseenter.directive';
import {TesterInlineComponent} from './tester-inline.component';
import {TesterHostComponent} from './tester-host.component';

@Component({
  selector: 'adc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    TesterComponent,
    BoldDirective,
    UnderlineDirective,
    MouseenterDirective,
    TesterInlineComponent,
    TesterHostComponent
  ],
  standalone: true
})
export class AppComponent {
  title = 'angular-directory-composition';

  hoverEventHandler() {
    console.log('hover');
  }
}
