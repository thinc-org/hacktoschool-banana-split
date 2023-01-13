import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MessageModule } from './message/message.module';
import { CourseMaterialModule } from './course-material/course-material.module';
import { YoutubeLinkModule } from './youtube-link/youtube-link.module';

@Module({
  imports: [
    PrismaModule,
    CourseModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MessageModule,
    CourseMaterialModule,
    YoutubeLinkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
