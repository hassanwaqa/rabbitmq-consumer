import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @EventPattern('message_queue')
  handleMessageReceived(@Payload() text: string) {
    return this.appService.handleMessageReceived(text);
  }
}
