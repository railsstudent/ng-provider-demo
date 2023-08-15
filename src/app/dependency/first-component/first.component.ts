import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HappyService } from '../services/happy.service';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  template: `<div>
    <p>First Component</p>
    <p>Msg: {{msg}}</p>
  </div>`,
  styles: [`
    :host {
      display: block;
    }

    div {
      border: red 2px solid;
      padding: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent {
  msg = inject(HappyService).message();
}