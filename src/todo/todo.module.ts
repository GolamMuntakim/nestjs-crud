import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { AppService } from 'src/app.service';
import { AuthenticationMiddleware } from 'src/authentication/authentication.middleware';

@Module({
    controllers : [TodoController],
    providers:[TodoService, AppService],
})
export class TodoModule  {
    // implements NestModule
    // configure(consumer: MiddlewareConsumer) {
    //    consumer.apply(AuthenticationMiddleware)
    //    .forRoutes('/get-todos')
    //   }
}
