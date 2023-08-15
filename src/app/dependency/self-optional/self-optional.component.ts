import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-self-optional',
  standalone: true,
  template: `
    <div>
      <p>Self Optional Component</p>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelfOptionalComponent {
  service? = inject(MessageService, { self: true, optional: true });
  msg = this.service?.message() ?? 'Component does not inject MessageService itself and optional message is shown';
}