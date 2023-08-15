import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HappyService {
  message() {
    return 'This is a happy message from root injector';
  }
}