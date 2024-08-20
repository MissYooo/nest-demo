import { Controller, Get, HttpException, HttpStatus, UseFilters } from "@nestjs/common";
import { CustomException } from "./exception/CustomException";
import { HttpExceptionFilter } from "./exceptionFilter/HttpExceptionFilter";

@Controller('error')
@UseFilters(HttpExceptionFilter)
export class ErrorController {
  @Get()
  mookError() {
    /* throw {
      statusCode: 500,
      message: "出错了"
    } */
    /* throw new HttpException("出错了", HttpStatus.INTERNAL_SERVER_ERROR, {
      cause: new Error('捕获到的错误')
    }) */
    // 抛出自定义异常
    throw new CustomException()
  }
}