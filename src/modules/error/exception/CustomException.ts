import { HttpException, HttpStatus } from "@nestjs/common"

export class CustomException extends HttpException {
  constructor() {
    super('自定义的异常', HttpStatus.BAD_REQUEST)
  }
}