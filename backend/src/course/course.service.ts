import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaClient } from '@prisma/client';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';

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
      include: {
        instructor: true,
        students: true,
      },
    });
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    try {
      return await prisma.course.update({
        data: {
          ...updateCourseDto.data,
          students: {
            connect: updateCourseDto.userIdsToAdd
              ? updateCourseDto.userIdsToAdd.map((x) => ({ id: x }))
              : [],
          },
        },
        where: {
          id: id,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientValidationError)
        return {
          statusCode: '400',
          message: 'Data property is invalid',
          error: 'Bad Request',
        };
      else if (error instanceof PrismaClientKnownRequestError)
        return {
          statusCode: '400',
          message: 'User with specified user id could not be found',
          error: 'Bad Request',
        };
      else {
        console.log(error);
        return {
          statusCode: '500',
          message: 'Some error occured while processing request',
          error: 'Internal Server Error',
        };
      }
    }
  }

  async remove(id: number) {
    return await prisma.course.delete({
      where: {
        id: id,
      },
    });
  }
}
