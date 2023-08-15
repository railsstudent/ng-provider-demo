import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirstComponent } from './dependency/first-component/first.component';
import { HostOptionalComponent } from './dependency/host-optional/host-optional.component';
import { OptionalComponent } from './dependency/optional/optional.component';
import { ParentComponent } from './dependency/parent/parent.component';
import { SelfOptionalComponent } from './dependency/self-optional/self-optional.component';
import { SelfComponent } from './dependency/self/self.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent, OptionalComponent, SelfComponent, ParentComponent, SelfOptionalComponent, HostOptionalComponent],
  template: `
    <h3>Dependency injection test</h3>
    <app-first-component></app-first-component>
    <app-optional></app-optional>
    <app-self></app-self>
    <app-self-optional></app-self-optional>
    <app-parent></app-parent>
    <app-host-optional></app-host-optional>
  `,
  styles: [`
    :host {
      display: block;
      padding : 1rem;
    }

    * {
      margin-top: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(title: Title) {
    title.setTitle('Ng provider demo');
  } 
}
