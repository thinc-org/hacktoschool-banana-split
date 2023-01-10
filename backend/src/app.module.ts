import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, CourseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
