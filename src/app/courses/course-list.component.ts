import { CourseService } from './courses.sevice';
import { Courses } from './courses';
import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{
    hello: string = 'Lista de Cursos';
    _courses: Courses[] = [];

    _filterBy!: string;
    coursesMap!: Courses[];

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        this._courses = this.courseService.returnCourse();
        this.coursesMap = this._courses;
    }

    set filter(value: string) {
        this._filterBy = value;
        this.coursesMap = this._courses.filter((course: Courses) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}