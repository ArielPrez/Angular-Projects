import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from '../favorite/favorite.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = 'List of Courses';
  l = console.log;
  courses;
  post={
    title: 'Star',
    isFavorite: false
  }
  
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  
  onFavChanged(eventArgs: FavoriteChangedEventArgs){
    this.l("Fav changed! ", eventArgs.newValue);
  }

  onAdd(){
    this.courses.push ({title: 'course '});
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.l(index);
    this.courses.splice(index, 1);
  }
  // METHOD THAT AVOID THE USES OF MORE MEMORY AND NETWORK RESOURCES WHEN THE BROWSER TRY TO RE-GENERATE CODE
  // IN THIS CASE A LIST OF COURSES TO NO RE-RENDER A DOM ELEMENT
  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}
