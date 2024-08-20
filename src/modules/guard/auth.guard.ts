import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from 'express'

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp()
    const request = ctx.getRequest<Request>()
    return false
  }
}