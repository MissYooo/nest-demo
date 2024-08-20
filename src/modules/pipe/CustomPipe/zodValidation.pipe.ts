import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ZodSchema } from 'zod'
/**
 * 管道验证案例，zod库
 */
export class ZodValidationPipe implements PipeTransform {
  constructor(private zodSchema: ZodSchema) { }
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const val = this.zodSchema.parse(value)
      console.log('val', val)
      return val
    } catch (error) {
      throw new BadRequestException('请求有误')
    }
  }

}