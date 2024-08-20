import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { delay, map, tap } from "rxjs";

interface Data<T> {
  data: T
}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Data<T>> {
  intercept(context: ExecutionContext, next: CallHandler) {
    const now = Date.now();
    return next.handle().pipe(delay(1000), tap(() => { console.log(`After... ${Date.now() - now}ms`) }), map(data => ({ data })))
  }
}