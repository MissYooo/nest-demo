import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { LoggerMiddleware } from "src/middleware/logger.middleware";
@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UserController)
  }
}