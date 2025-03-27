import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handleMessageReceived(text: string) {
    console.log(`New User Created: ${text}`);
  }
}
