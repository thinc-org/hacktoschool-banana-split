import { Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    const hashpwd = await argon.hash(dto.password);
    console.log(hashpwd);
    return { msg: 'I have signed up' };
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}
