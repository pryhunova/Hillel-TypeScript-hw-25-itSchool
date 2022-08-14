import { ILesson } from './interfaces/interface'
import {Lesson} from './lesson'

export class LearningGroup {
    public passedLessons: ILesson[] = [];

    constructor(
        public courseName: string,
        public teacherName: string,
        public amountOfStudents: number
    ) {
    }


  doneLesson(title: string, topics: string[]): string | void {
    if (this.passedLessons.some(lesson => lesson.title === title)) {
      return `Lesson with ${title} already exist.`;
    }
    this.passedLessons.push(new Lesson(title, topics));
  }
}
