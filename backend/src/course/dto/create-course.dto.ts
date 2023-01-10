import { isNumber, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;
  @IsString()
  description: string;

  @IsNumber()
  instructorId: number;
}
