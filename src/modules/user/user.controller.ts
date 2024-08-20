import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from './dto'
import { UserService } from "./user.service";
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }
  @Post('create')
  create(@Body() body: CreateUserDto) {
    this.userService.create(body)
    return {
      msg: "创建成功"
    }
  }

  @Get('')
  getAll() {
    return this.userService.getAll()
  }
}