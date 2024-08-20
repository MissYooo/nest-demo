import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
/**
 * 管道转换案例
 */
@Injectable()
export class ParseIntPipe implements PipeTransform<any, number> {
  transform(value: any, metadata: ArgumentMetadata): number {
    const val = parseInt(value)
    if (isNaN(val)) throw new BadRequestException("id必须为数字")
    return val
  }
}