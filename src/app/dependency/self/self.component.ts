import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-self',
  standalone: true,
  template: `
    <div>
      <p>Self Component</p>
      <p>Msg: {{ msg }}</p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    div {
      border: rebeccapurple 2px solid;
      padding: 0.5rem;
    }
  `],
  providers: [
    {
      provide: MessageService,
      useFactory: () => ({
        message() {
          return 'Provide MessageService in SelfComponent';
        }
      }),
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelfComponent {
  service = inject(MessageService, { self: true });
  msg = this.service.message();
}