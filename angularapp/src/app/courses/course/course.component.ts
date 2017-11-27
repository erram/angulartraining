import { Component, OnInit } from '@angular/core';

export interface ICourse {
  courseName: string;
  courseLength: number;
  courseDate: Date;
  btnEditText: string;
  btnDeleteText: string;
  courseDescription: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
