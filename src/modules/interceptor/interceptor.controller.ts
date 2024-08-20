import { Body, Controller, Post, UseInterceptors } from "@nestjs/common";
import { TransformInterceptor } from "./transform.interceptor";

@Controller('interceptor')
export class InterceptorController {
  @Post('test')
  @UseInterceptors(TransformInterceptor)
  test(@Body() data: any) {
    return '123'
  }
}