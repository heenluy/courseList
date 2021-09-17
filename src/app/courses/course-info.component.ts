import { CourseService } from './courses.sevice';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Courses } from "./courses";

@Component({
    templateUrl: './course-info.component.html',
    styleUrls: ['./course-info.component.css']
})

export class CourseInfoComponent implements OnInit {

    courses!: Courses;
    nullToString?: string | null;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {

    }
    
    ngOnInit() {

        this.nullToString = this.activatedRoute.snapshot.paramMap.get('id') as string;
        this.courses = this.courseService.returnById(Number(this.nullToString));
    }

    save(): void {
        this.courseService.save(this.courses);
    }
}