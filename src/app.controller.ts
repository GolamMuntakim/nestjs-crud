import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
@Get("/user/:name")
@Render("index")
index(@Param("name") name:string){
  return {name}
}
//   @Get()
//   getHello(): {} {
//     return {
//       msg:"fuck u"
//     }
// }

// @Get("/login")
// loginFun():string {
//   return "Congratulation ! You succesfully login here"
// }

}