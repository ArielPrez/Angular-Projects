import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = 'List of Courses';
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
  
  
}
