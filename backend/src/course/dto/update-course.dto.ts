import { MappedType, PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto {
  data: MappedType<Partial<CreateCourseDto>>;
  userIdsToAdd?: number[];
}
