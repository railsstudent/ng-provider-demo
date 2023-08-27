import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OptionalComponent } from '../optional/optional.component';
import { SelfOptionalComponent } from '../self-optional/self-optional.component';
import { MessageService } from '../services/message.service';
import { SkipSelfOptionalComponent } from '../skip-self-optional/skip-self-optional.component';

@Component({
  selector: 'app-host-optional',
  standalone: true,
  imports: [SkipSelfOptionalComponent, OptionalComponent, SelfOptionalComponent],
  template: `
    <div>
      <p>Host Optional Component</p>
      <p>Msg: {{ msg }}</p>
      <app-skip-self-optional></app-skip-self-optional>
      <app-self-optional></app-self-optional>
      <app-optional></app-optional>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    div {
      border: blue 2px solid;
      padding: 0.5rem;
    }

    app-skip-self-optional, app-self-optional, app-optional {
      margin-top: 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostOptionalComponent {
  service? = inject(MessageService, { host: true, optional: true });
  
  msg = this.service?.message() ?? 'Host Optional component returns default message';  
}