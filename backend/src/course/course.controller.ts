import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AuthGuard } from '@nestjs/passport';
import { Role } from '@prisma/client';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req: any, @Body() createCourseDto: CreateCourseDto) {
    // admin
    const user = req.user;
    if (user.role != Role.ADMIN) {
      throw new UnauthorizedException();
    }
    return this.courseService.create(createCourseDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Request() req: any, @Query('id') id: string) {
    // admin only
    const user = req.user;
    if (user.role != Role.ADMIN) {
      throw new UnauthorizedException();
    }

    return this.courseService.findAll(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Request() req: any, @Param('id') id: string) {
    // teacher, admin: every information
    // student: hide other student info
    const user = req.user;
    if (user.role == Role.STUDENT) {
      return this.courseService.findOneForStudent(+id);
    }

    return this.courseService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Request() req: any,
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    // admin only
    const user = req.user;
    if (user.role != Role.ADMIN) {
      throw new UnauthorizedException();
    }

    return this.courseService.update(+id, updateCourseDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    // admin only
    const user = req.user;
    if (user.role != Role.ADMIN) {
      throw new UnauthorizedException();
    }

    return this.courseService.remove(+id);
  }
}
