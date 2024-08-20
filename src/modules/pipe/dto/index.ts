import { IsInt, IsString } from 'class-validator';
import { z } from 'zod'
export const userSchema = z.object({
  name: z.string(),
  age: z.union([z.number(), z.string()])
}).required()

export type UserDto = z.infer<typeof userSchema>;

export class CatDto {
  @IsString()
  name: string

  @IsInt()
  age: number
}