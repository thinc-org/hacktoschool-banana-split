import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class CourseService {
  async create(createCourseDto: CreateCourseDto) {
    const now = new Date();
    return await prisma.course.create({
      data: {
        createdAt: now,
        updatedAt: now,

        title: createCourseDto.title,
        description: createCourseDto.description,

        instructor: {
          connect: {
            id: createCourseDto.instructorId,
          },
        },
      },
    });
  }

  async findAll() {
    return await prisma.course.findMany();
  }

  async findOne(id: number) {
    return await prisma.course.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    return await prisma.course.update({
      data: {
        ...updateCourseDto,
        updatedAt: new Date(),
      },
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    return await prisma.course.delete({
      where: {
        id: id,
      },
    });
  }
}
