import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: '12345',
      name: 'Mathematics',
      startDate: new Date().toISOString,
      endDate: new Date().toISOString,
    };
  }
}
