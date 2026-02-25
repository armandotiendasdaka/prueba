import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SingInClienteDto } from './cliente/dto/singIn-client.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('login')
  signIn(@Body() signInDto: SingInClienteDto) {
    return this.appService.signIn(signInDto);
  }
}
