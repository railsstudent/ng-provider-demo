import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HostOptionalComponent } from '../host-optional/host-optional.component';
import { HostComponent } from '../host/host.component';
import { HappyService } from '../services/happy.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [HostComponent, HostOptionalComponent],
  template: `
    <div>
      <p>Parent Component</p>
      <p>Msg: {{ msg }}</p>
      <p>Happy Msg: {{ happyMsg }}</p>
      <app-host></app-host>
      <app-host-optional></app-host-optional>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    div {
      border: pink 2px solid;
      padding: 0.5rem;
    }

    app-host, app-host-optional {
      margin-top: 0.25rem;
    }
  `],
  providers: [
    {
      provide: MessageService,
      useFactory: () => ({
        message() {
          return 'Message in Parent component';
        }
      }),
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  msg = inject(MessageService).message();
  happyMsg = inject(HappyService).message();
}