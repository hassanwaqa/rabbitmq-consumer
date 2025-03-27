import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handleMessageReceived(text: string) {
    console.log(`Received a new order - customer: ${text}`);
  }
}
