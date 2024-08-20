import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module'
import { ErrorModule } from './modules/error/error.module'
import { PipeModule } from './modules/pipe/pipe.module';
import { GuardModule } from './modules/guard/guard.module';
import { InterceptorModule } from './modules/interceptor/interceptor.module';
import { DecoratorModule } from './modules/decorator/decorator.module'
@Module({
  imports: [UserModule, ErrorModule, PipeModule, GuardModule, InterceptorModule, DecoratorModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
