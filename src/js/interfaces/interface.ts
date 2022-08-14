export interface ILesson {
  title: string;
  topics: string[];
}

export interface ICourse {
  name: string;
  totalLessons: number;
  availableTeachersAmount: number;
};

export interface IGroup {
  courseName: string;
  teacherName: string;
  amountOfStudents: number;
};
