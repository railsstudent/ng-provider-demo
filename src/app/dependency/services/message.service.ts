import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  message() {
    return 'This is MessageService';
  }
}