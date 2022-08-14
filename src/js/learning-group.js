"use strict";
exports.__esModule = true;
exports.LearningGroup = void 0;
var lesson_1 = require("./lesson");
var LearningGroup = /** @class */ (function () {
    function LearningGroup(courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
        this.passedLessons = [];
    }
    LearningGroup.prototype.doneLesson = function (title, topics) {
        if (this.passedLessons.some(function (lesson) { return lesson.title === title; })) {
            return "Lesson with ".concat(title, " already exist.");
        }
        this.passedLessons.push(new lesson_1.Lesson(title, topics));
    };
    return LearningGroup;
}());
exports.LearningGroup = LearningGroup;
