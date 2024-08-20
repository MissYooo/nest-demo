import { Controller, Get } from "@nestjs/common";
import { user } from "./user.decorator";

@Controller('decorator')
export class DecoratorController {
  @Get('test')
  test(@user() data: any) {
    console.log(data)
  }
}