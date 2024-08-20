import { Body, Controller, DefaultValuePipe, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ParseIntPipe } from "./CustomPipe/parseInt.Pipe";
import { CatDto, UserDto, userSchema } from "./dto";
import { ZodValidationPipe } from "./CustomPipe/zodValidation.pipe";

@Controller('pipe')
export class PipeController {
  @Get(':id')
  parseIntTest(@Param('id', ParseIntPipe) id: number) {
    console.log('id', id)
    console.log('typeof id', typeof id)
    return {
      msg: ""
    }
  }

  @Post('createUser')
  // @UsePipes(new ZodValidationPipe(userSchema))
  createUser(@Body(new ZodValidationPipe(userSchema)) userDto: UserDto) {
    return {
      msg: '新增成功'
    }
  }

  @Post('createCat')
  createCat(@Body(ValidationPipe) catDto: CatDto) {
    return {
      msg: '新增成功'
    }
  }
}