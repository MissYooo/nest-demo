import { Module } from "@nestjs/common";
import { ErrorController } from "./error.controller";
@Module({
  controllers: [ErrorController],
  providers: []
})
export class ErrorModule { }