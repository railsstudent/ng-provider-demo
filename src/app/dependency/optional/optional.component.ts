import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-optional',
  standalone: true,
  template: `
    <div>
      <p>Optional Component</p>
      <p>Msg: {{ msg }}</p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    div {
      border: green 2px solid;
      padding: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionalComponent {
  service? = inject(MessageService, { optional:  true });

  msg = this.service ? this.service.message() : 'Cannot inject MessageService and optional flag enabled.'
}