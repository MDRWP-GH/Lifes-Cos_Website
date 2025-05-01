import { IsString, IsInt, Min, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(100)
  readonly name: string;

  @IsString()
  @MaxLength(500)
  readonly description: string;

  @IsInt()
  @Min(1)
  readonly price: number;
}