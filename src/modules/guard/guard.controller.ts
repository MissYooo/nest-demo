import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";

@Controller('guard')
export class GuardController {

  @Get('test')
  @UseGuards(AuthGuard)
  testAuth() {
    return {
      msg: "测试权限"
    }
  }
}