import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {} {
    return {
      msg:"fuck u"
    }
}

@Get("/login")
loginFun():string {
  return "Congratulation ! You succesfully login here"
}

}