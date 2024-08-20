import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from 'express'

export const user = createParamDecorator((data: string | undefined, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getResponse<Request>()
  return data || '自定义装饰器'
})