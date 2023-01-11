import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaClient, Role, User } from '@prisma/client';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';

const prisma = new PrismaClient();

@Injectable()
export class CourseService {
  async create(createCourseDto: CreateCourseDto) {
    const now = new Date();
    const instructor = await prisma.user.findUnique({
      where: {
        id: createCourseDto.instructorId,
      },
    });

    if (!instructor) {
      return {
        statusCode: '400',
        message: 'User with specified instructor id could not be found',
        error: 'Bad Request',
      };
    }

    if (instructor.role != Role.TEACHER)
      return {
        statusCode: '400',
        message:
          'User with specified instructor id does not have the instructor role',
        error: 'Bad Request',
      };

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
          message: 'Some users with specified user ids could not be found',
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
