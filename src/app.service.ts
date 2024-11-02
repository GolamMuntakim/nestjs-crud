import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {} {
    return {
      "name":"siam"
    }
  }

  createTodo():String{
    return "Todo is done"
  }
}
