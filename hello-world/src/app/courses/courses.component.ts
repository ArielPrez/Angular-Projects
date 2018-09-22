import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = 'List of Courses';
  l = console.log;
  imageUrl = 'http://lorempixel.com/400/200';
  courses;
  isActive = true;
  eMail = "me@example.com";
  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }
  deactivateBtn($event){
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.l("Button active");  
    } else {
      this.l("Button deactivated.");
    }
    this.l($event);
  }
  enterWasPres(name){
    this.l('ENTER was pressed.\n'+name);
  }
  onKeyUp(){
    this.l(this.eMail);
  }
  
}
