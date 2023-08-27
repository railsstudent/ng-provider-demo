import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OptionalComponent } from '../optional/optional.component';
import { SelfOptionalComponent } from '../self-optional/self-optional.component';
import { MessageService } from '../services/message.service';
import { SkipSelfComponent } from '../skip-self/skip-self.component';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [SkipSelfComponent, OptionalComponent, SelfOptionalComponent],
  template: `
    <div>
      <p>Host Component</p>
      <p>Msg: {{ msg }}</p>
      <app-skip-self></app-skip-self>
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

    app-skip-self, app-self-optional, app-optional {
      margin-top: 1rem;
    }
  `],
  providers: [
    {
      provide: MessageService,
      useFactory: () => ({
        message() {
          return 'Host component of SkipSelfComponent.  Both components should see this message';
        }
      }),
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostComponent {
  service? = inject(MessageService, { host: true, optional: true });
  
  msg = this.service ? this.service.message() : 'Host component returns optional message';
}