import { MappedType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  data: MappedType<Partial<CreateUserDto>>;
  courseIdsToOwn?: number[];
  courseIdsToEnroll?: number[];
}
