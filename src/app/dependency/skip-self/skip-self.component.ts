import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-skip-self',
  standalone: true,
  template: `
    <div>
      <p>SkipSelf Component</p>
      <p>Msg: {{ msg }}</p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    div {
      border: cyan 2px solid;
      padding: 0.5rem;
    }
  `],
  providers: [
    {
      provide: MessageService,
      useFactory: () => ({
        message() {
          return 'SkipSelf flag is enabled, you should not see this message';
        }
      }),
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkipSelfComponent {
  service = inject(MessageService, { skipSelf: true });

  msg = this.service.message();
}