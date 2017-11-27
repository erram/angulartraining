import { Component, OnInit } from '@angular/core';
import { ICourse } from './course/course.component';

export interface ICourseContainer {
  courses: ICourse[];
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
