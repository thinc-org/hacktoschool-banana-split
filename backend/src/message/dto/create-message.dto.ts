import { IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsNumber()
  roomId: number;

  @IsNumber()
  authorId: number;

  @IsString()
  content: string;
}
